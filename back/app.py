from flask import Flask, request, jsonify
from flask_cors import CORS

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
  data = json_data['english']
  get_list.append(data)
  print(data)
  return 'success'

@app.route('/api/words/list')
def words_list():
  print(get_list)
  return jsonify(get_list)