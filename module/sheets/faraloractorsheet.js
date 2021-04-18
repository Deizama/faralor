export default class FaralorActorSheet extends ActorSheet{
    get template(){
        console.log(`Faralor | Récupération du fichier html ${this.actor.data.type}-sheet.`);

        return `systems/faralor/templates/sheets/${this.actor.data.type}-sheet.html`;
    }

    getData(){
        const data = super.getData();
        
        console.log(data);

        return data;
    }
}