import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "dataFilterArticle"
})
export class ArticlePipe implements PipeTransform {

  transform(array: any, query: any): any {
     let listResult;
    if (query) {
      let idP =_.filter(array, row=>row.articleId==query);
      var sectionInfo = [
          {"SectionInformation":_.filter(array, row=>row.articleId==query)},
        {"SectionInformation":_.filter(array, row=>row.subSectionId.sectionId.groupId.bussineId.nameBu.indexOf(query) > -1)},
        {"SectionInformation":_.filter(array, row=>row.subSectionId.sectionId.groupId.nameGroup.indexOf(query) > -1)},
        {"SectionInformation":_.filter(array, row=>row.subSectionId.sectionId.nameSection.indexOf(query) > -1)},
        {"SectionInformation":_.filter(array, row=>row.subSectionId.nameSubSection.indexOf(query) > -1)}
      ]
      let nfo=idP;
      sectionInfo.forEach(function(sectioninforData, index) {
        if(sectioninforData.SectionInformation.length >= nfo.length){
          nfo=sectioninforData.SectionInformation;
        }
        });
      return nfo;
    }
    return array;
  }
}
