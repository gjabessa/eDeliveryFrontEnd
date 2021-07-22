import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }
  items: any = [
    {name: "Lenovo 81JW0001US Chromebook S330, 14" ,
    price: 159,
    url:"https://i5.walmartimages.com/asr/8a54d8c4-fe2b-45e5-a82d-5e7795cc3bbc_1.b62390d770a96572adaa9584f64bdfe2.jpeg?odnHeight=200&odnWidth=200&odnBg=ffffff"},
  {name:"SAMSUNG Chromebook 4+ 15.6 Intel Celeron Processor N4000",
    price:200,
    url: "https://i5.walmartimages.com/asr/8d794c17-41b0-42b2-9e11-4c60bfd81af0_1.54a5a04f52a9a6f929e635df6d8c31e6.jpeg?odnHeight=200&odnWidth=200&odnBg=ffffff"},
    {name: "Lenovo Ideapad 20",
  price: 50,
  url: "https://i5.walmartimages.com/asr/7ff1db09-dd0d-4ab8-a33e-309942deb826.eac9c4843b1d68df68a9f25553022828.jpeg?odnHeight=200&odnWidth=200&odnBg=ffffff"}
  ,
  {name: "HP Stream 2",
  price: 120,
  url: "https://i5.walmartimages.com/asr/91541f71-5eb1-40ad-b436-5593364ad17e_1.034a05d432cc7233e74c233a244332c7.jpeg?odnHeight=200&odnWidth=200&odnBg=ffffff"},
  {
    name: "Lenovo IdeaPad flex 5 14 ",
    price: 234,
    url: "https://i5.walmartimages.com/asr/b163a876-4363-4ab6-890b-ec414a0c9731.d44b2d14ef8e3caa038fd7b1b7caacd0.jpeg?odnHeight=200&odnWidth=200&odnBg=ffffff"
  },
  {name: "Lenovo 81JW0001US Chromebook S330, 14" ,
  price: 159,
  url:"https://i5.walmartimages.com/asr/8a54d8c4-fe2b-45e5-a82d-5e7795cc3bbc_1.b62390d770a96572adaa9584f64bdfe2.jpeg?odnHeight=200&odnWidth=200&odnBg=ffffff"},
{name:"SAMSUNG Chromebook 4+ 15.6 Intel Celeron Processor N4000",
  price:200,
  url: "https://i5.walmartimages.com/asr/8d794c17-41b0-42b2-9e11-4c60bfd81af0_1.54a5a04f52a9a6f929e635df6d8c31e6.jpeg?odnHeight=200&odnWidth=200&odnBg=ffffff"},
  {name: "Lenovo Ideapad 20",
price: 50,
url: "https://i5.walmartimages.com/asr/7ff1db09-dd0d-4ab8-a33e-309942deb826.eac9c4843b1d68df68a9f25553022828.jpeg?odnHeight=200&odnWidth=200&odnBg=ffffff"}
,
{name: "HP Stream 2",
price: 120,
url: "https://i5.walmartimages.com/asr/91541f71-5eb1-40ad-b436-5593364ad17e_1.034a05d432cc7233e74c233a244332c7.jpeg?odnHeight=200&odnWidth=200&odnBg=ffffff"},
{
  name: "Lenovo IdeaPad flex 5 14 ",
  price: 234,
  url: "https://i5.walmartimages.com/asr/b163a876-4363-4ab6-890b-ec414a0c9731.d44b2d14ef8e3caa038fd7b1b7caacd0.jpeg?odnHeight=200&odnWidth=200&odnBg=ffffff"
}
  
];
  getItems(){
    return this.items;
  }
}
