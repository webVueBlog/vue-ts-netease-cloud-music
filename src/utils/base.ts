export function createFormData(map: {[key: string]: any}): FormData {
 const formData = new FormData()
 for (const key in map) {
   formData.append(key, map[key])
 }
 return formData
}