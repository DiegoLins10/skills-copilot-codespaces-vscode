function skillsMember() {
    var member = document.getElementById('member');
    var memberValue = member.options[member.selectedIndex].value;
    var memberText = member.options[member.selectedIndex].text;
    var skills = document.getElementById('skills');
    var skillsValue = skills.options[skills.selectedIndex].value;
    var skillsText = skills.options[skills.selectedIndex].text;
    var skillsArray = skillsText.split(',');

    if (memberValue == '0') {
        skills.style.display = 'none';
    } else {
        skills.style.display = 'block';
        skills.innerHTML = '';
        for (var i = 0; i < skillsArray.length; i++) {
            var option = document.createElement('option');
            option.value = i;
            option.text = skillsArray[i];
            skills.appendChild(option);
        }
    }
}