from pyramid_handlers import action
from pyra.lib.empty_class import EmpClass as c
from pyra.lib.base import BaseController
from pyra.config import *
import psycopg2
import psycopg2.extras
class ContentsController(BaseController):

    __autoexpose__ = None

    @action(renderer="templates/contents/contact_us.mako")
    def contact_us(self):
        conn_string = config['psycopg2_conn_string']
        conn = psycopg2.connect(conn_string)
        cursor = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
        sql = "select ref_type,ref_id from stemformatics.configs;"
        cursor.execute(sql)
        result = cursor.fetchall()
        cursor.close()
        conn.close()
        print(result)
        # set up C
        c.title=c.site_name+" - Contact_us"

        return {'c': c, 'h': self.helper, 'project_url': '/'}

    @action(renderer="templates/contents/about_us.mako")
    def about_us(self):
        # set up C
        c.title = c.site_name + " - About_us"
        return {'c': c, 'h': self.helper, 'project_url': '/'}
    #faq page wouldn't work without the tutorial list
    @action(renderer="templates/contents/faq.mako")
    def faq(self):
        # set up C
        c.title = c.site_name + " - Faq"
        return {'c': c, 'h': self.helper, 'project_url': '/'}

    @action(renderer="templates/contents/our_data.mako")
    def our_data(self):
        # set up C
        c.title = c.site_name + " - Our Data"
        return {'c': c, 'h': self.helper, 'project_url': '/'}
    #faq page wouldn't work without the data_publication
    @action(renderer="templates/contents/our_publications.mako")
    def our_publications(self):
        # set up C
        c.title = c.site_name + " - Our Publications"
        return {'c': c, 'h': self.helper, 'project_url': '/'}

    @action(renderer="templates/contents/disclaimer.mako")
    def disclaimer(self):
        # set up C
        c.title = c.site_name + " - Disclaimer"
        return {'c': c, 'h': self.helper, 'project_url': '/'}

    @action(renderer="templates/contents/privacy_policy.mako")
    def privacy_policy(self):
        # set up C
        c.title = c.site_name + " - Privacy Policy"
        return {'c': c, 'h': self.helper, 'project_url': '/'}
