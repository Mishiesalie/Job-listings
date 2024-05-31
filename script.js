let searchField = document.querySelector('#search-field');

let choose = document.querySelectorAll('.choose').length;
let close = document.querySelector('.close');
	for(var i=0;i<choose;i++){
	


	document.querySelectorAll('.choose')[i].addEventListener('click',function(){

		searchField.style.display = 'block';
				
		close.style.display= 'block';
				
		var node = document.createElement("DIV");
		node.classList.add('item');
		var textnode = document.createTextNode(this.textContent);
		node.appendChild(textnode);
		searchField.appendChild(node);

//chooseText has the value of text from choosen button
	    const chooseText = this.textContent;
//filter 
	    filterChoose(chooseText);    
//select the item 	  
		let item = document.querySelectorAll('.item');		

//loop through the items	
		for(var j=0;j<item.length;j++){		
			
		
//delete the item when clicked on it
			document.querySelectorAll('.item')[j].addEventListener('click', function(){
						
					this.style.display='none';					
			});
		}		
});
}

//filter
const skill = document.querySelector('.main-content');
const filterChoose = (chooseText) => {

	Array.from(skill.children)
	.filter((choosenSkill) => !choosenSkill.textContent.includes(chooseText))
	
	.forEach((choosenSkill) => choosenSkill.classList.add('filtered'));
			
	let item = document.querySelectorAll('.item');		

//loop through the items	
	for(var j=0;j<item.length;j++){		
			
		
//delete the item when clicked on it
		document.querySelectorAll('.item')[j].addEventListener('click', function(){
			
			//show the card again
			Array.from(skill.children)
			.filter((choosenSkill) => choosenSkill.textContent.includes(chooseText))
			.forEach((choosenSkill) => choosenSkill.classList.remove('filtered'));
			});
		}	
};
const card = document.querySelectorAll('.card');
	
//close the searchfield when click on clear
close.addEventListener('click', function(){
	
	searchField.style.display = 'none';
	close.style.display= 'none';
	
	for(let k=0;k<card.length;k++){
		card[k].classList.remove('filtered');	
	}	
	//remove choose buttons
	while(searchField.firstChild){
	
		searchField.removeChild(searchField.firstChild);	
	}
});
