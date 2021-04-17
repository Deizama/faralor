export default class FaralorItemSheet extends ItemSheet{
    get template(){
        console.log(`Faralor | Récupération du fichier html ${this.item.data.type}-sheet.`);

        return `systems/faralor/templates/sheets/${this.item.data.type}-sheet.html`;
    }

    getData(){
        const data = super.getData();
        
        console.log(data);

        return data;
    }
}