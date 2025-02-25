import path from "path";
import fs from "fs";
import { meta_types } from "@global_types";

const postsDirectory = path.join(process.cwd(), "_posts");
function productNameSpinner(val: string) {
    var pattern = /[^가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9]/gi;
    if (pattern.test(val)) {
        val = val.replace(pattern, "");
    }
    return val;
}
export const getImageByCategory = (category: meta_types.DailyBestItem["category"]) => {
    switch (category) {
        case "여성패션": {
            return "https://images.unsplash.com/photo-1583846539095-4dd7d202b00f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80";
        }
        case "남성패션": {
            return "https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80";
        }
        case "뷰티": {
            return "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
        }
        case "출산-유아동": {
            return "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
        }
        case "식품": {
            return "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
        }
        case "주방용품": {
            return "https://images.unsplash.com/photo-1498579992117-24d6ebc00a19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80";
        }
        case "생활용품": {
            return "https://images.unsplash.com/photo-1584556812945-a6830379555b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80";
        }
        case "홈인테리어": {
            return "https://images.unsplash.com/photo-1543332164-6e82f355badc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
        }
        case "가전디지털": {
            return "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80";
        }
        case "스포츠-레저": {
            return "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
        }
        case "자동차용품": {
            return "https://images.unsplash.com/photo-1555626906-fcf10d6851b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
        }
        case "도서-음반-DVD": {
            return "https://images.unsplash.com/photo-1557758161-d9717c543503?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80";
        }
        case "완구-취미": {
            return "https://images.unsplash.com/photo-1555448049-f8657e9fc8f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
        }
        case "문구-오피스": {
            return "https://images.unsplash.com/photo-1518826778770-a729fb53327c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80";
        }
        case "헬스-건강식품": {
            return "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1410&q=80";
        }
        case "반려동물용품": {
            return "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
        }
        case "유아동패션": {
            return "https://images.unsplash.com/photo-1522771930-78848d9293e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80";
        }
        default:
            throw new Error(`${category} ERROR POSTS GET IMAGE BY CATEGORY`);
    }
    return "";
};

export const getDateById = (id: string, type: "KOR" | "PURE" | "DATE"): string => {
    const rawDate = id.split("@")[0].split("-");
    const fullDate = rawDate[rawDate.length - 1];
    const year = fullDate.slice(0, 4);
    const month = fullDate.slice(4, 6);
    const day = fullDate.slice(6, 8);
    if (type === "KOR") {
        return `${year}년 ${month}월 ${day}일`;
    } else if (type === "PURE") {
        return `${year}${month}${day}`;
    } else {
        return `${year}-${month}-${day}`;
    }
};

export const getCategoryById = (id: string): meta_types.DailyBestCategory => {
    // @ts-ignore
    return id.split("-2")[0];
};

export function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.json`);
    const createdDate = getDateById(id, "KOR");
    const fileContent = fs.readFileSync(fullPath, "utf8");
    return {
        id: id,
        createdDate: createdDate,
        thumbnailImage: getImageByCategory(getCategoryById(id)),
        data: fileContent,
    };
}

export function getStoredPostList(): Array<{ params: meta_types.DailyBestItem }> {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
        const id = fileName.replace(/\.json$/, "");
        const category = getCategoryById(id);
        return {
            params: {
                id: id,
                category: getCategoryById(id),
                createdDate: getDateById(id, "KOR"),
                pureCreatedDate: getDateById(id, "PURE"),
                thumbnailImageUrl: getImageByCategory(category),
            },
        };
    });
}

export function getSortedPostsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        var id = fileName.replace(/\.json$/, "");
        id = id.split("@")[0];

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        // Combine the data with the id
        return {
            product: id,
        };
    });
    // Sort posts by date
    return allPostsData;
}

export function getDetailPostData(id: string) {
    const category_list = getStoredPostList();
    var product_list = [];
    category_list.forEach(({ params }) => {
        const cur_category_data = JSON.parse(getPostData(params.id).data);
        const cur_category_path_list = cur_category_data.item_list.map((it) => {
            return {
                params: {
                    id: `${productNameSpinner(it.productName)}-${it.productId.toString()}`,
                    ...it,
                },
            };
        });
        product_list = product_list.concat(cur_category_path_list);
    });

    var targetIdx = product_list.findIndex(({ params }) => params.productId.toString() === id);

    return { ...product_list[targetIdx] };
}

export function getDetailPostList(isNeedValue?: boolean) {
    const category_list = getStoredPostList();
    var res_list = [];
    category_list.forEach(({ params }) => {
        const cur_category_data = JSON.parse(getPostData(params.id).data);
        const cur_category_path_list = cur_category_data.item_list.map((it) => {
            if (isNeedValue) {
                return {
                    params: {
                        id: `${productNameSpinner(it.productName)}-${it.productId.toString()}`,
                        ...it,
                    },
                };
            } else {
                return {
                    params: {
                        id: `${productNameSpinner(it.productName)}-${it.productId.toString()}`,
                    },
                };
            }
        });
        res_list = res_list.concat(cur_category_path_list);
    });
    return res_list;
}
