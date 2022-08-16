from cupang import cupang_keyword_search, get_cuplink
import os
import json
import datetime
import time
now_path = os.path.dirname(os.path.abspath(__file__))
file = open(f'{now_path}/metadata/setting.json',
            'r', encoding='utf-8')
config_dict = json.load(file)


def main():
    # keyword_list = ['노트북']
    keyword = '일렉트릭기타'
    files_Path = f"{now_path}/_search_keyword_posts/"
    file_name_and_time_lst = []
    for f_name in os.listdir(f"{files_Path}"):
        timeSplitedString = f_name.split('@')[0].split('-')
        modifyTime = timeSplitedString[len(timeSplitedString)-1]
        categoryCode = f_name.split('@')[1].split('.json')[0]
        file_name_and_time_lst.append((modifyTime,categoryCode))

    sorted_file_list = sorted(file_name_and_time_lst, key=lambda tup: tup[0],reverse=True)

    print("가장 마지막 수정된 파일 : ",sorted_file_list[0][1])

    # # 다음에 호출할 카테고리 번호 구하기!
    # next_index = 0
    # now_index = request_list.index(int(sorted_file_list[0][1]))
    # if now_index == len(request_list)-1:
    #     next_index = 0
    # else:
    #     next_index = now_index + 1
    #
    #
    # # 상품 가져오기
    # category = category_list[next_index]
    # categoryId = request_list[next_index]
    #
    # print(category,categoryId)
    limit = 10
    product_list = cupang_keyword_search(keyword, limit)

    print(product_list)

    # TRANSLATE LINK
    originUrlList  = []
    for product in product_list:
        productId = product['productId']

        transUrl = f'https://www.coupang.com/vp/products/{productId}'
        originUrlList.append(transUrl)

    cupResult = get_cuplink(originUrlList)

    for idx,product in enumerate(product_list):
        product['productUrl'] = cupResult[idx]['shortenUrl']

    #[STEP 3] : POST TO JSON
    resDict = dict()
    resDict['title'] = keyword
    resDict['item_list'] = []
    for product in product_list:
        curDict = dict()
        curDict = product
        resDict['item_list'].append(curDict)

    # SAVE JSON
    # cur_time =datetime.datetime.utcnow().strftime('%Y%m%d%H%M%S%f')
    cur_time = datetime.datetime.utcnow().strftime('%Y%m%d')
    save_time = f'{str(cur_time)}'
    # with open(f'{now_path}/_posts/{category}-{save_time}@{categoryId}.json', 'w', encoding='UTF-8') as file:
    #     file.write(json.dumps(resDict, ensure_ascii=False))

    ## 여기
    with open(f'{now_path}/_search_keyword_posts/{keyword}-{save_time}@.json', 'w', encoding='UTF-8') as file:
        file.write(json.dumps(resDict, ensure_ascii=False))

    # with open(f'{now_path}/_posts/{keyword}-{save_time}@.json', 'w', encoding='UTF-8') as file:
    #     file.write(json.dumps(resDict, ensure_ascii=False))

if __name__ == "__main__":
    main()