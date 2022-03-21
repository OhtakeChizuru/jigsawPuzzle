import requests

# The Metropolitan Museum of Art Collection APIへのURL
url = "https://collectionapi.metmuseum.org/public/collection/v1/objects"

def getObjectList(date):
    payload = {
        'metadataDate': date
    }
    try:
        return requests.get(url, params=payload)
    except:
        raise Exception('The Metropolitan Museum of Art Collection APIへのアクセスに失敗しました')

def getObjectData(objectID):
    try:
        return requests.get(url + '/' + str(objectID))
    except:
        raise Exception('The Metropolitan Museum of Art Collection APIへのアクセスに失敗しました')

# 日付を指定して一覧の取得
res = getObjectList('2018-10-31')
list = res.json()
list_count = list['total']
print('list count is ', list_count)

# 一番最後のデータの取得
res = getObjectData(list['objectIDs'][list_count-1])
data = res.json()
print('objectID is', list['objectIDs'][list_count-1])
print('title is "', data['title'], '"')
print(' by', data['artistDisplayName'])

# https://qiita.com/mine820/items/5f3e769452e15ef18c70からコピー
# 画像のデータを取得したい。
