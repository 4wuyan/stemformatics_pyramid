import psycopg2
import psycopg2.extras

config = {
 'psycopg2_conn_string':"host='localhost' dbname='portal_beta' user='portaladmin'"
}

conn_string = config['psycopg2_conn_string']
conn = psycopg2.connect(conn_string)
cursor = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
sql = "select ref_type,ref_id from stemformatics.configs;"
cursor.execute(sql)
result = cursor.fetchall()
cursor.close()
conn.close()

result_dir={}
for row in result:
    ref_type = row['ref_type']
    ref_id = row['ref_id']
    try:
       ref_id = int(ref_id)
    except:
       pass

    result_dir[ref_type] = ref_id

for key in result_dir:
    config[key] = result_dir[key]