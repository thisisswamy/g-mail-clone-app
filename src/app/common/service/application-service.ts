export class ApplicationService {
    public static dataFactory:any={};

    public static set(key:string,value:any){
        this.dataFactory[key]=value;
    }
    public static get(key:string){
        return this.dataFactory[key];
    }
}
