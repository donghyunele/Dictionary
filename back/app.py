from flask import Flask, request
from flask_cors import CORS

from pymongo import MongoClient
import json
from bson.objectid import ObjectId

class Encoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, ObjectId):
            return str(obj)
        else:
            return obj

client = MongoClient('localhost', 27017)

db = client["test"]
collection = db["dictionary"]

# 삽입
# data = list()
# data.append({"sedentary": ['주로 앉아서 하는', '주로 앉아서 지내는', '한 곳에 머무는']})
# data.append({"assumption": ['추정','산정','인수']})
# data.append({"get back": ['~로 돌아가다','~에게 결과를 보고하다']})
# data.append({"graveyard": ['묘지','폐지장']})
# data.append({"sultry": ['무더운','관능적인','섹시한']})
# collection.insert_many(data)

# collection.delete_many()
results = collection.find()

app = Flask(__name__)
cors = CORS(app, resources={
  r"/v1/*": {"origin": "*"},
  r"/api/*": {"origin": "*"},
})

get_list = []

@app.route('/')
def hello_world():
  return 'Hello, World'

@app.route('/v1/posts/title/<id>')
def title(id):
  return 'title - %s' % id

@app.route('/v1/posts/content/<id>')
def content(id):
  return 'content - %s' % id

@app.route('/api/word/add', methods=['POST'])
def add_word():
  json_data = request.get_json()
  print("넘어온 데이터 : ", json_data)
  data = json_data['english']
  print(data)
  return 'success'

@app.route('/api/words/list')
def words_list():
  results = collection.find()
  
  data = []

  for result in results:
    data.append(result)
  
  return json.dumps(data, cls=Encoder)