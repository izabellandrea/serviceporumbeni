function myFunction() {
    var txt;
    if (confirm("Keszitsek devizt?")) {
      txt = "You pressed OK!";
      location.replace("Deviz.html")
      devizMaker();

    } else {
        txt = "You pressed Cancel!";
      }
  
  
    }

    function devizMaker(){
        

        var htmlContent =  '<div class="Page">'+
         
          '<div class="Comanda" id="divToPrint">'+
           ' <Form>'+
            '  <div class="Provider-Client">'+
            '    <header class="row">'+
 
            '  <div class="logoholder text-center" contenteditable>'+
            '       <img src="img/logo.jpg">'+
            '     </div><!--.logoholder-->'+
                
                
            '     <div class="me" contenteditable>'+
            '       <p    style="margin-top: 10%;" >'+
            '         <strong>SC RELIA IMPEX SRL</strong><br>'+
            '         Porumbenii Mari nr. 421<br>'+
            '         537414 HARGHITA<br>'+
            '       </p>'+
            '     </div><!--.col-->'+
            '     <div class="info">'+
            '       <p style="margin-top: 10%;" contenteditable>'+
            '         Cod fiscal: RO14985920 <br>'+
            '         Nr. ord: J08/1462/2002 <br>'+
            '         Tel: 0748-50-28-23<br>'+
            '       </p>'+
            '     </div>'+
                
            '   </header>'+
                
                
            '   <div class="row section">'+
                 
            '      <div class=" client">'+
                    
                
            '  <input id="DeClient"name="Client" value="" placeholder="Client">'+
            '       <input name="CNP" value="" placeholder="CNP/CUI">'+
            '       <input name="Adresa" value="" placeholder="Adresa">'+
            '       <input name="Telefon" value="" placeholder="Telefon">'+
                     
            '      </div><!--.col-->'+
                  
                
            '   </div><!--.row-->'+
                
            '</div>'+
            ' <div class="ComandaNr"   style="display: flex;">'+
            '         <label  >Deviz.</label>'+
            '         <input '+
            '           name="ComNr"'+
            '           type="text"'+
            '          style="width: 10%;"'+
            '>'+
                      ' </div>'+
            
            
        
            
    
                      ' <div class="Car-Details">'+
                
                      '<div class="col col1" >'+
                      '<label>Tip autovehicul</label>'+
                    
                      ' <input '+
                      ' name="Tip autovehicul"'+
                      ' type="text"'+
                      ' style="width:100%"'+
                      '>'+
                      '</div>'+
                  
    
                
                      ' <div class="col col2" >'+
                      '<div class="car-details">'+
                      
                      '   <div class="col"  >'+
                      '     <label >Serie șasiu</label>'+
                         
                      '     <input name="Serie" type="text" >'+
                      '   </div>'+
                        
                      '</div>'+
                      '<div class="car-details">'+
                      
                      '   <div class="col" >'+
                      '     <label >Tip motor</label>'+
                          
                      '     <input name="Tip" type="text">'+
                      '   </div>'+
                        
                      '</div>'+
                      '</div>'+
                      '<div class="col col2" >'+
                      '<div class="car-details">'+
                      
                      '   <div class="col"  >'+
                      '     <label>Nr. inmatriculare</label>'+
                         
                      '   <input name="Nr" type="text"  >'+
                      ' </div>'+
                       
                      ' </div>'+
                      ' <div class="car-details">'+
                     
                      ' <div class="col"  >'+
                      '  <label >An fabricație</label>'+
                          
                      ' <input name="An" type="text"  >'+
                      '</div>'+
                        
                      ' </div>'+
                      ' </div>'+
                      ' <div class="col col3">'+
                      '  <div class="car-details">'+
                      
                      '  <div class="col" >'+
                      '     <label>Index km</label>'+
                          
                      '     <input name="Index" type="text"  >'+
                      '   </div>'+
                        
                      '</div>'+
                      ' </div>'+
                
                      '</div>'+
    
                      '<div class="Prices">'+
                      '  <div class="table-responsive">'+
                      ' <table class="table  ">'+
                      '   <tbody>'+
                      '     <tr>'+
                      '      <td>Materiale</td>'+
                         '<td>Fără TVA:</td>'+
                         '<td class= "totalMatfTVA" style=" text-align: end; padding-right: 5%;" id="totalMatfTVA"> '+
                         '</td>'+
                         '<td style=" padding-left: 5%;" >Cu TVA:</td>'+
                         '<td class="totalMatcuTVA" style=" text-align: end;"  id="totalMatcuTVA">'+
                        
                         '</td>'+
                         '</tr>'+
                         ' <tr>'+
                         '  <td>Manoperă</td>'+
                         '  <td>Fără TVA:</td>'+
                         '  <td  class= "totalManfTVA" style=" text-align: end; padding-right: 5%;" id="totalManfTVA" >'+
                         ' </td>'+
                         ' <td style=" padding-left: 5%;" >Cu TVA:</td>'+
                         '  <td class="totalMancuTVA"style=" text-align: end;" id="totalMancuTVA">'+
                        
                         '  </td>'+
                         ' </tr>'+
                         '  <tr>'+
                         '   <td></td>'+
                         ' <td>Valoare fără TVA:</td>'+
                         ' <td  class="totalfTVA" id="totalfTVA"style=" text-align: end;padding-right: 5%;" ></td>'+

                         '<td style=" padding-left: 5%;" >Valoare TVA:</td>'+
                         '<td class="valTVA" id="valTVA"style=" text-align: end;" ></td>'+
                        
                         '</tr>'+
                         ' </tbody>'+
                         ' </table>'+
                         '</div>'+
                         '<div class="Total-text">'+
                         '  <h6 >TOTAL COMANDĂ CU TVA</h6>'+
                         ' <h6 class="TOTAL" id="TOTAL">'+
                    
                         ' </h6>'+
                         '</div>'+
                         '</div>'+
    
                         '<div class="Material-details invoicelist-body invoicelist-body-mat">'+
                         '<h3>Detaliere materiale</h3>'+
                         '<div class="table-responsive">'+
                         '<table>'+
                         '  <thead contenteditable>'+
                         '    <th  class="CodArticol">Cod Articol</th>'+
                         '   <th class="MatDesc"width="30%">Descriere</th>'+
                         '   <th class="UM"width="10%">UM</th>'+
                         ' <th class="MatCant"width="5%">Cant</th>'+
                         '  <th class="pfTVA" width="15%"style="text-align: end;">Preț fără TVA</th>'+
                         '  <th class="MatvalfTVA"width="15%" style="text-align: end;">Val. fără TVA</th>'+
                         ' <th class= "MatvalcuTVA"width="15%"style="text-align: end;">Val. cu TVA</th>'+
                         '</thead>'+
                         '<tbody>'+
                         '  <tr>'+
                         '  <td class="CodArticol"><a class="control removeMatRow" href="#">x</a><input type="text" value=""/></td>'+
                         ' <td class="MatDesc"><input type="text" value="" /></td>'+
                         ' <td class="UM"><input type="text" value="" /></td>'+
                         '<td class="MatCant"><input type="text" value="" /></td>'+
                         ' <td class="pfTVA"><input type="text" value="" style="text-align: end;"/></td>'+
                         ' <td class="MatvalfTVA" style="text-align: end;"></td>'+
                         '<td class="MatvalcuTVA" style="text-align: end;"></td>'+
                         ' </tr>'+
                         '</tbody>'+
                         '</table>'+
                         '</div>'+
                         '<a class="control newMatRow" href="#">+ </a>'+
                         '</div>'+
            
                  
              
    
                         '<div class="Manopera-details  invoicelist-body invoicelist-body-man">'+
                         ' <h3>Detaliere manopere</h3>'+
                         ' <div class="table-responsive">'+
                         ' <table>'+
                         '  <thead contenteditable>'+
                    
                         '   <th class="ManDesc"width="20%">Descriere</th>'+
                         '  <th class="Mecanic"width="10%">Mecanic</th>'+
                         '  <th class="Norma"width="10%">Normă</th>'+
                         '  <th class="Tarif" width="10%">Tarif</th>'+
                         '  <th class="ManCant" width="5%">Cant</td>'+
                         ' <th class="TotalNorma" width="15%" style="text-align: end;">Total Normă</td>'+
                         ' <th class="ManvalfTVA" width="15%" style="text-align: end;">Val. fără TVA</th>'+
                         ' <th class= "ManvalcuTVA"width="15%"style="text-align: end;">Val. cu TVA</th>'+
                         '</thead>'+
                         '<tbody>'+
                         ' <tr>'+
                         '<td class="ManDesc"><a class="control removeManRow" href="#">x</a><input type="text" value=""/></td>'+
                         ' <td class="Mecanic"><input type="text" value="" /></td>'+
                         ' <td class="Norma"><input type="text" value="" /></td>'+
                         ' <td class="Tarif"><input type="text" value="" /></td>'+
                         ' <td class="ManCant"><input type="text" value="" /></td>'+
                         ' <td class="TotalNorma" style="text-align: end;"><input type="text" value="" style="text-align: end;"/></td>'+
                         ' <td class="ManvalfTVA" style="text-align: end;"></td>'+
                         ' <td class="ManvalcuTVA" style="text-align: end;"></td>'+
                         '</tr>'+
                         ' </tbody>'+
                         ' </table>'+
                         ' </div>'+
                         ' <a class="control newManRow" href="#">+ </a>'+
                         '</div>'+
    
                         '<div class="Text">'+
                         ' <h5>Termenul de execuție a lucrărilor comandate este de'+
                         '<input /> Acest termen poate suferi modificări în următoarele'+
                         'cazuri: -pentru realizarea lucrărilor comandate la desfacerea unui'+
                         'ansamblu se descoperă defecțiuni noi, care necesită comenzi, piese'+
                         'și/sau lucrări suplimentare. -piesele comandate nu sunt livrate la'+
                         'termenele prestabilite de furnizor. -în caz de forță majoră sau'+
                         'caz fortuit.'+
                  '</h5>'+
                  '<h5>'+
                  'Unitatea poate efectua lucrări suplimentare și înlocuiri de piese'+
                  'până la nivelul sumei maxime de <input />'+
                  'RON, acestea fiind acceptate prin prezenta.'+
                  '</h5>'+
                  '<h5>'+
                  ' Beneficiarul/ Clientul declar că sunt de acord că prestatorul are'+
                  'un drept de retenție asupra autovehiculului reparat până la'+
                  ' achitarea integrală a contravalorii facurii(lor) de service/'+
                  ' reparație acceptat de mine/ societatea noastră.'+
                  '</h5>'+
                  '</div>'+
    
                  '<div class="Signatures">'+
                  '<h2>Semnătura și ștampila unității</h2>'+
                  '<h2>Accept comanda (client)</h2>'+
                  ' </div>'+
                  ' </Form>'+
                  '<div class="WhiteSpace" ></div>'+
                  ' </div>'+
         
           
          

      
                  '</div>'+
                  ' <div class="btn-print">'+
                  '<button class="glyphicon glyphicon-print"  type="submit" value="Print" onclick="myFunction()" > Print</button>'+

                  ' </div>';



                  
                  $('.Page').append(htmlContent);


           


                document.getElementById('DeClient').value=document. 
             getElementById('CoClient').value; 
                   
                  
        
               
    }




    