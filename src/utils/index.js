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
}
export default new Utils();