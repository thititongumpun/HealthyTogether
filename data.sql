
INSERT INTO "category" ("id","categoryName","description","categoryOrderId","IsActive","createdAt","updatedAt") VALUES
	 ('22e1f7e4-3535-4e45-ace2-3b260c83aab5','หมวดอารมณ์และการพักผ่อน','อ.ออกกำลังใจ มีสติในงาน ระลึกฐานกาย รู้ลมหายใจ ไม่เพลินอารมณ์',3,true,'2022-11-07 00:23:40.976577',NULL),
	 ('4fc596db-da2f-4796-a267-3c34c45b234f','หมวดการออกกำลังกาย','อ.อิริยาบถ ออกแรง ออกกำลังกายอย่างเพียงพอ',2,true,'2022-11-07 00:23:40.976577',NULL),
	 ('bb7cc4ae-c184-4fbb-8f63-6266c136db11','หมวดสุราและเครื่องดื่มแอลกอฮอล์','ส.สุรา ลด ละ เลิก ดื่มแอลกอฮอล์ทุกชนิด',5,true,'2022-11-07 00:23:40.976578',NULL),
	 ('c2ea7b31-25f1-456d-8816-2db9c3735128','หมวดการสูบบุหรี่','ส.สูบบุหรี่ ไม่สูบ ไม่ดมควัน บุหรี่',4,true,'2022-11-07 00:23:40.976577',NULL),
	 ('c999adb5-142d-4bc2-9159-8fc551d5af08','หมวดอาหาร','อ.อาหารพอเพียง อาหารสุขภาพ',1,true,'2022-11-07 00:23:40.976548',NULL),
	 ('708da903-3e93-4d30-8917-e5f37454c26e','กลุ่มโรคไม่ติดต่อเรื้อรัง','ความรู้เกี่ยวกับกลุ่มโรคไม่ติดต่อเรื้อรัง',0,true,'2022-11-07 00:23:40.976578',NULL);


INSERT INTO "advice" ("id","subject","url","isactive","createdAt","updatedAt", "categoryId") VALUES
	 ('12b27420-2a55-4a4e-9e46-ddad8be64707','การออกกำลังกายป้องกันโรคหัวใจ','https://youtu.be/P4_ZHwmpagc',true,'2022-11-07 00:23:41.494345',NULL, '4fc596db-da2f-4796-a267-3c34c45b234f'),
	 ('1e311485-4aee-4d7e-ba20-6fdf6eebc46e','วิธีเลิกบุหรี่','https://shorturl.asia/G7duI',true,'2022-11-07 00:23:41.494503',NULL, 'c2ea7b31-25f1-456d-8816-2db9c3735128'),
	 ('209fb465-1769-4738-b397-fa6410863834','ท่าออกกำลังกายเพื่อลดพุง ลดโรคไม่ติดต่อเรื้อรัง กลุ่มงานสุขศึกษาโรงพยาบาลตราด','https://youtu.be/RUFvInGUixE',true,'2022-11-07 00:23:41.494345',NULL, '4fc596db-da2f-4796-a267-3c34c45b234f'),
	 ('21025558-fb0e-4109-8ecf-44aa988e1c0a','ทำอย่างไร ให้นอนหลับ','https://youtu.be/Why1OtvimVM',true,'2022-11-07 00:23:41.494418',NULL, '22e1f7e4-3535-4e45-ace2-3b260c83aab5'),
	 ('35099342-dbc9-48b1-be05-eb5f9981a604','การออกกำลังกายและกิจกรรมเคลื่อนไหวทางกาย ลดความเสี่ยงและป้องกันควบคุมโรคไม่ติดต่อในชุมชน','https://youtu.be/q7GhJMzadbA',true,'2022-11-07 00:23:41.494344',NULL, '4fc596db-da2f-4796-a267-3c34c45b234f'),
	 ('4cd0857d-4d56-4eeb-9766-eb9a2a0313f9','วิธีลดเลิกเหล้า','https://shorturl.asia/O3E8K',true,'2022-11-07 00:23:41.494559',NULL, 'bb7cc4ae-c184-4fbb-8f63-6266c136db11'),
	 ('50dfdda5-7063-4abc-aa28-9cfb84302251','NCDs โรคที่เกิดจากพฤติกรรม: รู้สู้โรค','https://youtu.be/wHmYeZmAMWY',true,'2022-11-07 00:23:41.465211',NULL, '708da903-3e93-4d30-8917-e5f37454c26e'),
	 ('61b89fde-895e-4b98-b6fd-b40f0131d48e','เคล็ดลับ 7 วิธีดูแลสุขภาพห่างไกลโรคไม่ติดต่อ','https://youtu.be/Mle__NRrwyI',true,'2022-11-07 00:23:41.465212',NULL, '708da903-3e93-4d30-8917-e5f37454c26e'),
	 ('635a679b-a133-41cd-a0c6-4ff1e79b8701','10 วิธีช่วยเลิกบุหรี่','https://youtu.be/TooMaqEjh5s',true,'2022-11-07 00:23:41.494503',NULL, 'c2ea7b31-25f1-456d-8816-2db9c3735128'),
	 ('656aaa39-c696-41a3-86cd-ede33529d54c','อาหารที่ช่วยให้หลับสบาย: รู้สู้โรค','https://youtu.be/a7ebkBKLpgU',true,'2022-11-07 00:23:41.494418',NULL, '22e1f7e4-3535-4e45-ace2-3b260c83aab5');
INSERT INTO "advice" ("Id","Subject","url","isactive","createdAt","updatedAt", "categoryId") VALUES
	 ('7b3a859e-8d3a-42c7-a7a9-f77da4f8a1cc','NCDs โรคไม่ติดต่อเรื้อรัง ภัยเงียบจากพฤติกรรมการกิน','https://youtu.be/elkz5u4QvXQ',true,'2022-11-07 00:23:41.494257',NULL, 'c999adb5-142d-4bc2-9159-8fc551d5af08'),
	 ('7e55fd13-a640-492c-8aef-9381ab2ab28b','5 วิธีพร้อมเลิกบุหรี่','https://shorturl.asia/Eza7K',true,'2022-11-07 00:23:41.494502',NULL, 'c2ea7b31-25f1-456d-8816-2db9c3735128'),
	 ('866a45c8-90c8-414e-ad4c-ba9820540c6d','อ้วนแบบไหนเสี่ยงโรคไม่ติดต่อเรื้อรัง: รู้สู้โรค','https://youtu.be/l4hwrLoYBFQ',true,'2022-11-07 00:23:41.494259',NULL, 'c999adb5-142d-4bc2-9159-8fc551d5af08'),
	 ('a744c2ce-ad9d-44ca-9366-e2cbd07581a4','5 วิธีง่าย ๆ ผ่อนคลายจากภาวะเครียด','https://youtu.be/kv6-UwPQIm0',true,'2022-11-07 00:23:41.494416',NULL, '22e1f7e4-3535-4e45-ace2-3b260c83aab5'),
	 ('ad44e272-ead4-4629-8d24-b6000600c6fc','ออกกำลังกายในกลุ่มเสี่ยงให้ห่างไกลกลุ่มโรคไม่ติดต่อเรื้อรังและไขมันในเลือดสูง','https://youtu.be/Bugy4aEZ4Do',true,'2022-11-07 00:23:41.494345',NULL, '4fc596db-da2f-4796-a267-3c34c45b234f'),
	 ('b43cb7be-ca7b-452d-afc2-b2df6abd1a17','ตารางแคลอรี่ในอาหารไทย โดยกรมอนามัยฯ','https://www.easycookingmenu.com/index.php/knowledge/kcal-table',true,'2022-11-07 00:23:41.49426',NULL, 'c999adb5-142d-4bc2-9159-8fc551d5af08'),
	 ('def182fb-9b52-4b2d-8315-c22b59894a6c','5 วิธีลดการดื่มเครื่องดื่มแอลกอฮอล์และความเสี่ยงโรคมะเร็ง','https://alcoholstudy.in.th/index.php?ct=news&proc=main&id=202',true,'2022-11-07 00:23:41.49456',NULL, 'bb7cc4ae-c184-4fbb-8f63-6266c136db11'),
	 ('e9f98051-4a9d-4083-bad9-ee1c94790590','3 ขั้นตอนฝึกสมาธิ ช่วยคลายเครียดและลดโรค','https://youtu.be/TooMaqEjh5s',true,'2022-11-07 00:23:41.494417',NULL, '22e1f7e4-3535-4e45-ace2-3b260c83aab5'),
	 ('eb1d573a-3747-4065-958a-d3c94bc3e52f','การจัดการความเครียดด้วยตนเอง: Mahidol Channel','https://youtu.be/U7d1-_SWJv4',true,'2022-11-07 00:23:41.494417',NULL, '22e1f7e4-3535-4e45-ace2-3b260c83aab5'),
	 ('f56e5f87-acaa-4fe0-9f7d-0cc71a3b9b77','อาหารป้องกันโรคไม่ติดต่อ','https://youtu.be/gW24KkGBN7U',true,'2022-11-07 00:23:41.494258',NULL, 'c999adb5-142d-4bc2-9159-8fc551d5af08');
INSERT INTO "advice" ("Id","Subject","url","isactive","createdAt","updatedAt", "categoryId") VALUES
	 ('71345de9-213c-476e-96fc-d67f2583b52a','เทคนิคทานคาร์โบไฮเดรตให้ผอมและหุ่นดี','https://www.youtube.com/watch?v=IIhAS9lX8Ys',true,'2022-12-08 17:16:54.523252',NULL, 'c999adb5-142d-4bc2-9159-8fc551d5af08'),
	 ('2a79e287-50ba-4794-9363-022930bf5e66','รับประทานน้ำตาลชนิดใด ห่างไกลโรค : รู้เท่ารู้ทัน (10 มี.ค. 64)','https://www.youtube.com/watch?v=4obm__oTpw0',true,'2022-12-08 17:18:06.229994',NULL, 'c999adb5-142d-4bc2-9159-8fc551d5af08'),
	 ('f63e6e91-6612-408b-bc4f-20dea45b1de3','โซเดียมแฝง : รพ.บ้านบึง จังหวัดชลบุรี','https://www.youtube.com/watch?v=Ien9T50vRKo',true,'2022-12-08 17:18:39.848431',NULL, 'c999adb5-142d-4bc2-9159-8fc551d5af08'),
	 ('5e6e37c1-6985-47f4-b1b5-adfac9b259cd','12 เคล็ดลับ นอนอย่างไรให้ Productive ตื่นแล้วสดชื่น พร้อมลุยงาน | The Secret Sauce EP.318','https://www.youtube.com/watch?v=OEMF50D5Q-I',true,'2022-12-08 17:19:34.882499',NULL, '22e1f7e4-3535-4e45-ace2-3b260c83aab5'),
	 ('1345ff87-3188-4985-b64d-317f52b6afa7','ความหมายและประเภทของการออกกำลังกาย','https://www.youtube.com/watch?v=e__ZrjL9fg4',true,'2022-12-08 17:20:18.143078',NULL, '4fc596db-da2f-4796-a267-3c34c45b234f'),
	 ('2ec8d7cf-4a7b-4429-a3f1-2cc19e8b2f49','โรคไม่ติดต่อเรื้อรัง NCDs','https://youtu.be/yfLrelXBCds',true,'2022-11-07 00:23:41.465144',NULL, '708da903-3e93-4d30-8917-e5f37454c26e'),
	 ('9e0c4202-dce5-4f6d-8db1-5ef44633fa86','ตัวอย่างปริมาณน้ำตาลโดยเฉลี่ยในอาหาร','https://www.pattanihos.com/download/590727_02.pdf',true,'2022-12-28 16:42:33.678197',NULL, 'c999adb5-142d-4bc2-9159-8fc551d5af08'),
	 ('ebea2979-b64e-460f-a815-4d77bc872956','ปริมาณน้ำตาลในอาหาร','https://nutrition2.anamai.moph.go.th/th/lowsugar/download?id=47650&mid=32223&mkey=m_document&lang=th&did=15629',true,'2022-12-28 16:43:30.69414',NULL, 'c999adb5-142d-4bc2-9159-8fc551d5af08'),
	 ('64649fab-b57e-4f3c-af1c-1182ad5c8a98','ตัวอย่างปริมาณโซเดียมในอาหารจานเดียว','https://www.si.mahidol.ac.th/th/division/diabetes/admin/knowledges_files/5_44_1.pdf',true,'2022-12-28 16:44:07.069234',NULL, 'c999adb5-142d-4bc2-9159-8fc551d5af08'),
	 ('ebcb97d7-5754-46e2-aff7-df6e8f3b0fc6','ปริมาณโซเดียมในอาหาร','https://nutrition2.anamai.moph.go.th/th/nutripromhospital/download?id=47604&mid=32221&mkey=m_document&lang=th&did=15624',true,'2022-12-28 16:44:51.541827',NULL, 'c999adb5-142d-4bc2-9159-8fc551d5af08');

INSERT INTO "criteria" ("id","subject","qty","unit","isActive","isFix","createdAt","updatedAt","categoryId") VALUES
	 ('120379e4-b761-4fdb-8c98-6656a10e9071','อยู่ในสถานที่หรือใกล้ชิดคนที่กำลังสูบบุหรี่',0.0,'เฉลี่ยวัน/สัปดาห์',true,false,'2022-11-07 00:23:41.626209',NULL,'c2ea7b31-25f1-456d-8816-2db9c3735128'),
	 ('21824733-169e-42be-9451-18912b048ecf','ขยับเขยื้อนร่างกายทุกๆ',2.0,'ชั่วโมง',true,true,'2022-11-07 00:23:41.626124',NULL,'4fc596db-da2f-4796-a267-3c34c45b234f'),
	 ('37782ff0-fa88-438d-8435-3b2019c5f34f','ออกกำลังกายต่อเนื่องประมาณ',30.0,'นาที/วัน',true,true,'2022-11-07 00:23:41.626123',NULL,'4fc596db-da2f-4796-a267-3c34c45b234f'),
	 ('448ab60f-efff-4f0e-8672-63db73be4300','ระดับความเครียด',0.0,'ประเมินตนเอง 1-10 คะแนน',true,false,'2022-11-07 00:23:41.626182',NULL,'22e1f7e4-3535-4e45-ace2-3b260c83aab5'),
	 ('b1dffa0d-2bbe-43a3-b896-8c3153d91a68','ระยะเวลาของการรับประทานอาหารก่อนเข้านอน',3.0,'ชั่วโมงก่อนนอน',true,true,'2022-11-07 00:23:41.607147',NULL,'c999adb5-142d-4bc2-9159-8fc551d5af08'),
	 ('d397330b-4a65-4ce1-b3ff-11456fffa45a','ใช้กำลังกายแทนการใช้สิ่งอำนวยความสะดวกในชีวิตประจำวัน',0.0,'เฉลี่ยวัน/สัปดาห์',true,false,'2022-11-07 00:23:41.626124',NULL,'4fc596db-da2f-4796-a267-3c34c45b234f'),
	 ('e2d0b807-73e4-447c-ad37-303ccfa2ff39','เคลื่อนไหวร่างกายต่อเนื่องจากการทำกิจวัตรประจำวันประมาณ',30.0,'นาที/วัน',true,true,'2022-11-07 00:23:41.626123',NULL,'4fc596db-da2f-4796-a267-3c34c45b234f'),
	 ('c1993102-852f-4692-a7f8-9646668b60bd','เครื่องดื่มที่มีน้ำตาลสูง เช่น กาแฟเย็น ชาเย็น น้ำอัดลม',0.0,'แก้วต่อวัน',true,false,'2022-11-07 00:23:41.607146',NULL,'c999adb5-142d-4bc2-9159-8fc551d5af08'),
	 ('98b8bd05-ae6a-44d1-bec7-ee6d12f56786','รับประทานอาหารที่ไม่มีคุณค่าทางโภชนาการหรือมีน้อย เช่น ขนมกรุบกรอบ เค้ก เบเกอรี่',0.0,'เฉลี่ยวัน/สัปดาห์',true,false,'2022-11-07 00:23:41.607147',NULL,'c999adb5-142d-4bc2-9159-8fc551d5af08'),
	 ('28b78a51-b2c4-49df-a418-6e011bc8ac7d','ดื่มน้ำสะอาด 8-12',0.0,'แก้ว (ต่อวัน)',true,true,'2022-11-07 00:23:41.607145',NULL,'c999adb5-142d-4bc2-9159-8fc551d5af08');
INSERT INTO "criteria" ("Id","Subject","Qty","Unit","IsActive","IsFix","createdAt","updatedAt","categoryId") VALUES
	 ('87cae49c-a391-4a60-85b8-567838c5a0e4','บริโภคเกลือไม่เกิน 1 ช้อนชา น้ำปลา/ซอสปรุงรสไม่เกิน 4-5 ช้อนชาต่อวัน หรือบริโภคโซเดียมไม่เกิน 2,000 มก.ต่อวัน',0.0,'',true,true,'2022-11-07 00:23:41.607146',NULL,'c999adb5-142d-4bc2-9159-8fc551d5af08'),
	 ('7862e149-3c42-4b3b-86af-c975c11ed100','รับประทานอาหารที่มีไขมันสูง เช่น อาหารทอด กะทิ เนื้อสัตว์ติดมันหรือติดหนัง',0.0,'เฉลี่ยวัน/สัปดาห์',true,false,'2022-11-07 00:23:41.607146',NULL,'c999adb5-142d-4bc2-9159-8fc551d5af08'),
	 ('414a55d0-3de9-494f-95dd-bd784280bde3','รับประทานอาหารที่มีแป้งสูง เช่น พิซซ่า เบอร์เกอร์ ไก่ชุบแป้งทอด',0.0,'เฉลี่ยวัน/สัปดาห์',true,false,'2022-12-08 20:19:18.750028',NULL,'c999adb5-142d-4bc2-9159-8fc551d5af08'),
	 ('15011abc-5fb5-4908-9c42-3964d63231ba','รับประทานอาหารที่มีน้ำตาลสูง เช่น ผลไม้หรือผลไม้แปรรูป/อบแห้งที่มีน้ำตาลสูง อาหารหวานจัด',0.0,'เฉลี่ยวัน/สัปดาห์',true,false,'2022-12-08 20:19:47.257171',NULL,'c999adb5-142d-4bc2-9159-8fc551d5af08'),
	 ('97a8a963-bfba-4f71-8862-bf5cbbc4ea44','รับประทานอาหารครบ',5.0,'หมู่ในแต่ละมื้อ',true,true,'2022-11-07 00:23:41.607116',NULL,'c999adb5-142d-4bc2-9159-8fc551d5af08'),
	 ('5dcaba41-75d7-43b3-9f91-898718852c6e','รับประทานผัก 4-6 ทัพพีต่อวัน ผลไม้ 2-3',0.0,'กำมือ/ชิ้นคำ (ต่อวัน)',true,true,'2022-11-07 00:23:41.607145',NULL,'c999adb5-142d-4bc2-9159-8fc551d5af08'),
	 ('5c5e3f7c-6844-465c-807d-a6495baaf2e1','ลดปริมาณการดื่มสุราและเครื่องดื่มที่มีแอลกอฮอล์',0.0,'เฉลี่ยวัน/สัปดาห์',true,false,'2022-12-08 21:02:58.923504',NULL,'bb7cc4ae-c184-4fbb-8f63-6266c136db11'),
	 ('4d091427-2138-4764-9569-57ebbe35616d','ลดปริมาณการสูบบุหรี่',0.0,'มวน/วัน',true,false,'2022-11-07 00:23:41.626209',NULL,'c2ea7b31-25f1-456d-8816-2db9c3735128'),
	 ('7a5f6cf6-6177-4e3d-83a7-cbb28e272cc1','ทำกิจกรรมที่สนใจ เช่น ดูหนัง ฟังเพลง ปลูกต้นไม้ เพื่อคลายเครียด',0.0,'ชั่วโมง/วัน',true,false,'2022-12-08 21:29:19.074743',NULL,'22e1f7e4-3535-4e45-ace2-3b260c83aab5'),
	 ('8b0aa2de-b061-4376-a9a3-6b49fca378c3','บริโภคน้ำตาลไม่เกิน 4-6',0.0,'ช้อนชาต่อวัน',true,true,'2022-11-07 00:23:41.607145',NULL,'c999adb5-142d-4bc2-9159-8fc551d5af08');
INSERT INTO "criteria" ("Id","Subject","Qty","Unit","IsActive","IsFix","createdAt","updatedAt","categoryId") VALUES
	 ('80c26ec3-090b-4c5e-9e5c-5b3095dd8671','ชั่วโมงการนอนประมาณ',0.0,'ชั่วโมง/วัน',true,false,'2022-11-07 00:23:41.626181',NULL,'22e1f7e4-3535-4e45-ace2-3b260c83aab5'),
	 ('391eab1c-9a0c-43fb-85eb-7e79df7aa1f7','ดื่มสุราหรือเครื่องดื่มที่มีแอลกอฮอล์ไม่เกินวันละ 1 ดื่ม มาตรฐาน/วัน (สำหรับเพศหญิง) และ ',2.0,'ดื่ม มาตรฐาน/วัน (สำหรับเพศชาย) (1 ดื่มมาตรฐานเทียบเท่ากับไวน์ 1 แก้วหรือเบียร์ 1 กระป๋องต่อวันหรือสุรา/วิสกี้ 1 เป็ก)',true,true,'2022-11-07 00:23:41.626236',NULL,'bb7cc4ae-c184-4fbb-8f63-6266c136db11');
