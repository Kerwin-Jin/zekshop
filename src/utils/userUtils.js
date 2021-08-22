// 这个文件是和用户相关的一些工具函数
// 专门用来生成用户的临时标识的
import {v4 as uuid4} from "uuid"
// 一般的用户的临时标识是唯一的，而且一旦生成，不会轻易改变
export function getUserTempId(){
    let userTempId = localStorage.getItem("USERTEMPID_KEY")
    if(userTempId) return userTempId;
    userTempId = uuid4();
    localStorage.setItem("USERTEMPID_KEY",userTempId);
    return userTempId;
}