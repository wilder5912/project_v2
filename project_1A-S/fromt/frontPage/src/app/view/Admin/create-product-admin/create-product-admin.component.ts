import { Component, TemplateRef,OnInit ,ViewChild , ViewEncapsulation} from '@angular/core';
import { DataService } from '../../../service/dataService/data.service';
import { Router} from '@angular/router';
import { Section } from '../../../model/product/Section';
import { SubSection } from '../../../model/product/SubSection';
import { Article } from '../../../model/product/Article';
import { ArticleDetail } from '../../../model/product/ArticleDetail';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GroupProductService } from '../../../service/product/groupProductService';
import { SectionService } from '../../../service/product/SectionService';
import { SubSectionService } from '../../../service/product/SubSectionService';
import { ArticleService } from '../../../service/product/ArticleService';
import { ImageArticleSevice } from '../../../service/product/ImageArticleService';
import { TabsetComponent } from 'ngx-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { BussineService } from '../../../service/product/bussineService';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {  HttpRequest,HttpClient, HttpResponse, HttpEventType} from "@angular/common/http";
import { ValidateNumber } from '../../../service/validate/validateNumber.directive';


@Component({
  selector: 'app-create-product-admin',
  templateUrl: './create-product-admin.component.html',
  styleUrls: ['./create-product-admin.component.css'],
  providers: [SectionService,BussineService,GroupProductService,SubSectionService,ImageArticleSevice,ArticleService]

})
export class CreateProductAdminComponent implements OnInit {

  @ViewChild('staticTabsArticle') staticTabsArticle: TabsetComponent;
  public tapArticleImage=true;
  public form: FormGroup;
  public section: Section = new Section();
  public subSection: SubSection = new SubSection();
  public article: Article = new Article();
  public articleDetail: ArticleDetail = new ArticleDetail();
  public articleDetailListImage;
  public data;
  public dataSection;
  public filterQuery = "";
  public filterQuery2 = "";
  public rowsOnPage = 10;
  public sortBy = "nameArticle";
  public sortOrder = "asc";
  public bussineSelect;
  public groupSelect;
  public sectionSelect;
  public subSectionSelect;
  public selectedFilesArticle;
  public groupProductSelect;
  public config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false
  };
  public isEditForm:boolean = true;
  public modalRefSection: BsModalRef;
  public selectedFilesOne: FileList;
  public currentFileUploadOne: File;
  public selectedFilesTwo: FileList;
  public currentFileUploadTow: File;

  constructor(private router: Router , private formBuilder: FormBuilder, public dataService: DataService, public bussineService:BussineService,translate: TranslateService, public sectionService:SectionService, public groupProductService:GroupProductService  ,public subSectionService: SubSectionService,public imageArticleSevice:ImageArticleSevice, private modalService: BsModalService ,public articleService:ArticleService) {
    translate.setDefaultLang(dataService.languagePage);
    translate.use(dataService.languagePage);
  }

  ngOnInit() {
    this.dataService.redirectTypeUser();
    this.getListBussine();
    this.dataService.urlPage = this.router.url;
    this.getSectionList();
    this.formValidateModal();
    this.groupSelect= [
      {value: '', label: ''}

    ];
    this.sectionSelect= [
      {value: '', label: ''}
    ];
  }
  selectFileOne(event) {
    const file = event.target.files.item(0);
    if (file.type.match('image.*')) {
      this.selectedFilesOne = event.target.files;
    } else {
      console.log("formato invalido");
    }
  }


  public getImageArticleList(){
    this.imageArticleSevice.getImageSectionList()
      .subscribe(result => {
      }, error => {
        console.log(error);
      });
  }



  getListBussine(): void{
    this.bussineService.getBussine()
      .subscribe(result => {
        this.bussineSelect = result;
        //this.getSectionList();
      }, error => {
        console.log(error );
      });
  }

  public getSectionList(){
    this.sectionService.getSectionList()
      .subscribe(result => {
        this.dataSection = result;
      }, error => {
        console.log(error);
      });
  }

  public getSubSectionList(){
    this.subSectionService.getSubSectionList()
      .subscribe(result => {
        this.data = result;
      }, error => {
        console.log(error);
      });
  }

  public onSelectBussine(event){
    this.groupProductService.getProductGroupBussineId(event.value)
      .subscribe(result => {
        this.groupSelect=result;
      }, error => {
        console.log(error);
      });
  }

  public onSelectSection(event){
    this.sectionService.getSectionIdList(event.value)
      .subscribe(result => {
        this.sectionSelect=result;
      }, error => {
        console.log(error);
      });
  }


  public onSubSelect(event){

    this.subSectionService.getSectionSubSectionIdList(event.value)
      .subscribe(result => {
       // console.log(result,"--------");
        this.subSectionSelect=result;
      }, error => {
        console.log(error);
      });
  }


  public formValidateModal(){
    this.form = this.formBuilder.group({
      bussineId:['',Validators.compose([
        Validators.required
      ])],
      groupId:['',Validators.compose([
        Validators.required
      ])],
      sectionId:['',Validators.compose([
        Validators.required
      ])],
      subSectionId:['',Validators.compose([
        Validators.required
      ])],
      nameAr:['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])],
      codigoAr:['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])],
      precyAr:['', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        ValidateNumber.verificateNumber
      ])],
      detailAr:['', Validators.compose([
        Validators.required,
        Validators.minLength(10),
      ])],
      imageMainAr:['', Validators.compose([
        Validators.required
      ])],
      typeImageArticle:['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])],
      nombreImageActicle:['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])]
    });
  }

  public getValidateInfo():boolean{
    let stateBaoolean= true;
    let sectionInfo = [
      {"SectionInformation":this.form.controls.subSectionId.errors},
      {"SectionInformation":this.form.controls.nameAr.errors},
      {"SectionInformation":this.form.controls.codigoAr.errors},
      {"SectionInformation":this.form.controls.precyAr.errors},
      {"SectionInformation":this.form.controls.detailAr.errors}
    ];
    sectionInfo.forEach(function(keyForm: any,i){
         if(null !== keyForm.SectionInformation){
           stateBaoolean=false;
         }
    });
  return stateBaoolean;
  }

  openModalWithClass(template: TemplateRef<any>) {
    this.isEditForm = true;
    this.form.controls['sectionId'].setValue(null);
    this.form.controls['bussineId'].setValue('');
    this.form.controls['groupId'].setValue('');
    this.form.controls['subSectionId'].setValue('');
    this.form.controls['nameSubSection'].setValue('');
    this.modalRefSection = this.dataService.showModal(template,this.config);

  }

  public registerArticle(){
    if(true == this.getValidateInfo() && this.selectedFilesOne ) {
       this.subSection = new SubSection();
       this.article = new Article();
       this.subSection.subSectionId = this.form.value['subSectionId'];
      this.article.nameAr =   this.form.value['nameAr'];
      this.article.codigoAr =   this.form.value['codigoAr'];
      this.article.precyAr =   this.form.value['precyAr'];
      this.article.detailAr =   this.form.value['detailAr'];
      this.currentFileUploadOne = this.selectedFilesOne.item(0)
      this.articleService.updateImageAndArticle(this.currentFileUploadOne,this.article,this.subSection)
        .subscribe(result=>{
          this.tapArticleImage =false;
          this.staticTabsArticle.tabs[1].active = true;
          if (result instanceof HttpResponse) {
            this.articleDetail.articleId = this.article;
            this.articleDetail.subSectionId = this.subSection;
            this.articleDetail.articleId.articleId = parseInt(result.body+"");
          }
        });
    }
  }

  selectFiletwo(event) {
    this.selectedFilesArticle = true;
    const file = event.target.files.item(0);
    if (file.type.match('image.*')) {
      this.selectedFilesTwo = event.target.files;
    } else {
      console.log("formato invalido");
    }
  }

  uploadArticleImage() {
    //this.progress.percentage = 0;
//console.log("holass",this.selectedFilesTwo.item(0));
    this.currentFileUploadOne = this.selectedFilesTwo.item(0);
    this.imageArticleSevice.updateImageArticleId(this.currentFileUploadOne,this.articleDetail.articleId.articleId+"").subscribe(event => {
      if (event instanceof HttpResponse) {
        this.imageListArticle(this.articleDetail.articleId.articleId);
      }
    }, e => {
      console.log( "errrr",e );
    });
    this.selectedFilesArticle=undefined;
  }

imageListArticle(articleId : number){
  this.imageArticleSevice.getImageArticleIdList(articleId).subscribe(rest => {
    this.articleDetailListImage=rest;
    //console.log(this.articleDetailListImage,"-------------");
    //console.log(rest);
  }, e => {
    console.log( "errrr",e );
  });
}

// this.imageUser= this.dataService.getApiUrl()+"/user/files/"+this.dataService.AUTH_CONFIG.imagenUser;



  public editArticleInfo(){
  /*  if( null === this.form.controls.sectionId.errors && null === this.form.controls.nameSubSection.errors  ) {
      this.section = new Section();
      this.subSection = new SubSection();
      this.section.sectionId = this.form.value['sectionId'];
      this.subSection.sectionId = this.section;
      this.subSection.nameSubSection=this.form.value['nameSubSection'];
      this.subSection.subSectionId=this.form.value['subSectionId'];
      this.subSectionService.updateSubSection(this.subSection)
        .subscribe(result => {
          this.getSubSectionList();
        }, error => {
          console.log(error );
        });
      this.modalRefSection.hide();
    }*/
  }




  public remove(itemTableSection){
    console.log(itemTableSection)

  }
  public edit(itemTableSubSection ,template: TemplateRef<any>) {
    this.isEditForm = false;
    this.form.controls['bussineId'].setValue(itemTableSubSection.sectionId.groupId.bussineId.bussineId+'');
    this.form.controls['nameSubSection'].setValue(itemTableSubSection.nameSubSection+'');
    this.form.controls['subSectionId'].setValue(itemTableSubSection.subSectionId+'');
    this.groupProductService.getProductGroupBussineId(itemTableSubSection.sectionId.groupId.bussineId.bussineId)
      .subscribe(result => {
        this.groupSelect=result;
        this.form.controls['groupId'].setValue(itemTableSubSection.sectionId.groupId.groupId+'');
        this.getSectionId(itemTableSubSection.sectionId.groupId.groupId+'', itemTableSubSection.sectionId.sectionId, template);
      }, error => {
        console.log(error);
      });
  }

  public getSectionId(valueId,sectionIdData,template){

    this.sectionService.getSectionIdList(valueId)
      .subscribe(result => {
        this.sectionSelect=result;
        this.form.controls['sectionId'].setValue(sectionIdData+'');
        this.modalRefSection = this.dataService.showModal(template,this.config);

      }, error => {
        console.log(error);
      });
  }



}
