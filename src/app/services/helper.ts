export class Helper {
    /**
     * Fetch data by key from a resource
     */
    static fetchDataByKey(key: string, resource: any): object {
        return resource.find(resourceElement => resourceElement.key === key);
    }


}