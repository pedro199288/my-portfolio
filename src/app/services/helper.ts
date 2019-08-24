export class Helper {
    /**
     * Fetch data by key from a resource
     */
    static fetchDataByKey(key: string, resource: any): object {
        return resource.find(resourceElement => resourceElement.key === key);
    }

    static ObjectToArray(object) {
        // return Object.keys(object);

        var result = Object.keys(object).map(function(key) {
            return [Number(key), object[key]];
          });

        return result;
    }
}