// export default {
//     deepCopy(obj) {
//         try {
//            return Object.assign({}, obj);
//         }
//         catch(e) {
//             try {
//                 return JSON.parse(JSON.stringify(obj));
//             }
//             catch(e) {
//                 const copy_obj = {};

//                 for(let k in obj) {
//                     if(obj.hasOwnProperty(k)){
//                         copy_obj[k] = obj[k];
//                     }
//                 }
//                 return copy_obj;
//             }

//         }
//     }
// }

class Utils {
    /**
     * 深度拷贝
     * @param {Object} obj 需要深度拷贝的对象
     * @returns {Object} 拷贝后的对象
     */
    deepCopy(obj) {
        try {
           return Object.assign({}, obj);
        }
        catch(e) {
            try {
                return JSON.parse(JSON.stringify(obj));
            }
            catch(e) {
                const copy_obj = {};

                for(let k in obj) {
                    if(obj.hasOwnProperty(k)){
                        copy_obj[k] = obj[k];
                    }
                }
                return copy_obj;
            }

        }
    }

    /**
     * 数据类型检测
     * @param {every} data 需要检测的对象
     * @returns {String} 小写的数据类型
     */
    testData(data) {
        const str = Object.prototype.toString.call(data);
        const reg = /^\[object ([A-Za-z]+)\]$/;
        return reg.exec(str)[1].toLocaleLowerCase();
    }

}
export default new Utils();