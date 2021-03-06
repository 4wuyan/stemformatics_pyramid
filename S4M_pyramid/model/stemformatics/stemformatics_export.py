#-------Last synchronised with Pylons repo (master) on---------------#
#------------------------19 Feb 2018---------------------------------#
#-------------------------by WU Yan----------------------------------#

import psycopg2 , psycopg2.extras , time, os, subprocess
import io
from S4M_pyramid.lib.deprecated_pylons_globals import config



__all__ = ['Stemformatics_Export']

class Stemformatics_Export(object):


    def __init__ (self):
        pass

    """
        data: should be coming in as svg format
        output_format acceptable: svg/png/pdf/eps
    """
    @staticmethod
    def get_export_data_for_d3(data,file_name,output_format):
        class tempData(object):
            pass

        # try and stop people from deleting things on our server
        file_name = file_name.replace(";","_")

        file_name = file_name.replace(" ","_")

        temp_data = tempData()
        temp_data.data = ""

        temp_data.content_type = 'text/csv'
        temp_data.file_name = file_name +'.'+ output_format

        if output_format == "svg":
            temp_data.content_type = 'image/svg+xml'
            temp_data.data = data.encode()
            return temp_data

        base_dir = config['export_d3_dir']
        # make the directory if not there
        if not os.path.exists(base_dir):
            os.makedirs(base_dir)


        time_stamp = str(time.time())
        temp_input_file_base = base_dir+"/"+file_name+"_"+time_stamp
        temp_input_file = temp_input_file_base+".svg"

        """
        When converting using a combination of prince and pdftoppm, only need to change these two variables
        """
        if output_format == "pdf":
            temp_output_file = temp_input_file_base+".pdf"
            temp_data.content_type = 'application/x-pdf'
            command_line = "rsvg-convert -f pdf -o "+temp_output_file + " "+temp_input_file


        if output_format == "png":
            temp_output_file = temp_input_file_base+".png"
            temp_data.content_type = 'image/png'
            command_line = "rsvg-convert -f png -o "+temp_output_file + " "+temp_input_file


        # This was a problem with FF across all OS - especially FF36 24/03/15
        data = data.replace("(&quot;","(").replace("&quot;)",")").replace("url(#gradient) none","url(#gradient)")

        # write to temp input file
        f = open(temp_input_file,'w')
        f.write(data)#In python3 we don't need to encode the data
        f.close()


        p = subprocess.Popen(command_line,shell=True)
        p.communicate() # this makes the python code wait for the subprocess to finish

        # read from output file
        f = open(temp_output_file,'rb')#need read the file as binary
        export_data = f.read()
        f.close()


        # delete both files


        command_line = "rm "+temp_input_file+" "+temp_output_file
        p = subprocess.Popen(command_line,shell=True)

        # when using rsvg-convert, we don't have the staging file.

        #if output_format =="png":
        #    command_line = "rm "+staging_pdf_file
        #    p = subprocess.Popen(command_line,shell=True)

        temp_data.data = export_data

        return temp_data
