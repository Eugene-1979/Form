const labelForForm = document.querySelector("#labelForForm")
const rezultsMap = new Map();

const resetAll = document.querySelector("#resetAll");
let rez = document.querySelectorAll("#resultt input");
const formsSubmit = document.forms;
const noOk="что-то не ввели в форме "

//сброс результатов

resetAll.addEventListener("click", () => {
  labelForForm.innerHTML = ""
  rezultsMap.forEach((q, w) =>
    () => rezultsMap.set(q, []))
  rez.forEach(q => rezultsMap.set(q.value, []))
  console.log(rezultsMap);
})




rez.forEach(q => rezultsMap.set(q.value, []))


rez.forEach(q => {
  q.addEventListener("submit", q => q.preventDefault())
  q.addEventListener("click", function () {
    labelForForm.innerHTML = "";

    rezultsMap.get(this.value).forEach(q =>
    
      labelForForm.innerHTML += objtostr(q)

    )
  })
})







//вешаем обработчики клика и откл отправку

for (let index = 0; index < formsSubmit.length; index++) {
  const element = formsSubmit[index];

  //----------------------
  element.submit.addEventListener('submit', (q) => {
    q.preventDefault();
  });
  //--------------

  element.submit.addEventListener('click', (q) => {

    parseForm(q.target.form);
    
  });
}




console.log(rezultsMap);


function parseForm(form) {
  const result = {}


//---------Валидация




  if ((form.name=='registrationForm')&& 
   ((form.psw.value=="")||(form.pswrepeat.value=="")||(form.email.value=="")) ) 
   {alert(`${noOk}  ${form.name}`);
  return;
  }
   
   
  
   if ((form.name=='orderForm')&& 
   ((form.nameqq.value=="")||(form.email.value=="")|| (form.address.value=="")|| (form.city.value=="")||
    (form.state.value=="")|| (form.zip.value=="")||    (form.phone.value=="")|| (form.bdate.value=="")       )) 
   {
alert(`${noOk}  ${form.name}`)
return
   } 

if(((form.name=='registrationForm')||(form.name=='orderForm') )&&( validateEmail(form.email.value)))
{
  alert(`email не валидный ${form.name}`)
  return
    }



  if ((form.name=='registrationForm' )&& (form.psw.value!=form.pswrepeat.value)) 
  {
alert(`Пароли не совпадают в форме ${form.name}`)
return
  }




  for (let index = 0; index < form.elements.length; index++) {

    const element = form.elements[index];
    if ((element.name == 'submit')||(element.name=='reset')) continue

    result[element.name] = { value: element.value, type: element.type }

  }
  rezultsMap.get(form.name).push(result);
  console.log(rezultsMap);
}



//функция вывода формы

function objtostr(object) {
  let str = ""

  if (Object.keys(object).length > 0) {
    str = `<div class="form ff fff">
<label for="" id="labelForForm">`


    for (const key in object) {
      if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        str += `type:${element.type}       name: <b>${key}</b>       value:<b>${element.value}</b><br> `
      }
    }
    str += `</label>
</div>`;
  }
  return str;
}


function noValidation(str){
  alert(str);

}

function validateEmail(email) {
  let yy=/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
 // var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
 return !yy.test(String(email).toLowerCase());
 
}
