

function calculate(){

  var tva=21;

  var totalMatfTVA=0;
  var totalManfTVA=0;
  var totalMancuTVA=0;
  var totalMatcuTVA=0;

  var totalfTVA=0;
  var valTVA=0;
  var TOTAL=0;
  
  $('.invoicelist-body-mat tbody tr').each( function(){
    var row = $(this),
        MatCant = row.find('.MatCant input').val(),
        pfTVA = row.find('.pfTVA input').val();
    
        MatvalfTVA=MatCant*pfTVA;
        MatvalcuTVA=MatvalfTVA+(MatvalfTVA*tva/100);
        
        row.find('.MatvalfTVA').text( MatvalfTVA.toFixed(2) );
        row.find('.MatvalcuTVA').text( MatvalcuTVA.toFixed(2) );   
      
        totalMatfTVA+=MatvalfTVA;
        totalMatcuTVA+=MatvalcuTVA;
  });
  $('.invoicelist-body-man tbody tr').each( function(){
    var row = $(this),
      
        ManCant   = row.find('.ManCant input').val(),
        Norma=row.find('.Norma input').val(),
        Tarif=row.find('.Tarif input').val();
        TotalNorma=Norma*ManCant;
        
        row.find('.TotalNorma').text( TotalNorma.toFixed(2) );

        ManvalfTVA=Tarif*TotalNorma;
        ManvalcuTVA=ManvalfTVA+(ManvalfTVA*tva/100);
        
        row.find('.ManvalfTVA').text( ManvalfTVA.toFixed(2) );
        row.find('.ManvalcuTVA').text( ManvalcuTVA.toFixed(2) );
        
        totalManfTVA+=ManvalfTVA;
        totalMancuTVA+=ManvalcuTVA;
  });

  $('#totalMatfTVA').text(totalMatfTVA.toFixed(2)+" RON");
  $('#totalManfTVA').text(totalManfTVA.toFixed(2)+" RON");
  $('.totalMatcuTVA').text(totalMatcuTVA.toFixed(2)+" RON");
  $('.totalMancuTVA').text(totalMancuTVA.toFixed(2)+" RON");

  totalfTVA=totalManfTVA+totalMatfTVA;

  $('#totalfTVA').text(totalfTVA.toFixed(2)+" RON");
  
  valTVA=((totalManfTVA+totalMatfTVA)*tva)/100;
  $('#valTVA').text(valTVA.toFixed(2)+" RON");

  TOTAL=totalfTVA+valTVA;
  $('#TOTAL').text(TOTAL.toFixed(2)+" RON");
}


var newMatRow = 
'<tr>'+
'<td class="CodArticol"><a class="control removeMatRow" href="#">x</a><input type="text" value=""/></td>'+
'<td class="MatDesc"><input type="text" value="" /></td>'+
'<td class="UM"><input type="text" value="" /></td>'+
'<td class="MatCant"><input type="text" value="" /></td>'+
'<td class="pfTVA"><input type="text" value=""  style="text-align: end;"/></td>'+
'<td class="MatvalfTVA" style="text-align: end;"></td>'+
'<td class="MatvalcuTVA" style="text-align: end;"></td>'+
'</tr>';

var newManRow = 
'<tr>'+
    '<td class="ManDesc"><a class="control removeManRow" href="#">x</a><input type="text" value=""/></td>'+
    '<td class="Mecanic"><input type="text" value="" /></td>'+
    '<td class="Norma"><input type="text" value="" /></td>'+
    '<td class="Tarif"><input type="text" value="" /></td>'+
    '<td class="ManCant"><input type="text" value="" /></td>'+
    '<td class="TotalNorma"style="text-align: end;><input type="text" value=""  "/></td>'+
    '<td class="ManvalfTVA" style="text-align: end;"></td>'+
    '<td class="ManvalcuTVA" style="text-align: end;"></td>'+
'</tr>';

$('.invoicelist-body').on('keyup','input',function(){
  calculate();
});

$('.newMatRow').on('click',function(e){
  $('.invoicelist-body-mat tbody').append(newMatRow);
  e.preventDefault();

  calculate();
});

$('.newManRow').on('click',function(e){
    $('.invoicelist-body-man tbody').append(newManRow);
    e.preventDefault();
  
    calculate();
  });

$('body').on('click','.removeMatRow',function(e){
  $(this).closest('tr').remove();
  e.preventDefault();
  calculate();
});
$('body').on('click','.removeManRow',function(e){
    $(this).closest('tr').remove();
    e.preventDefault();
    calculate();
  });


calculate();
