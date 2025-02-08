// Helper function for creating elements
const createElement = (tag, classNames = [], innerHTML = '', attributes = {}) => {
  const elem = document.createElement(tag);
  if (classNames.length) elem.className = classNames.join(' ');
  if (innerHTML) elem.innerHTML = innerHTML;
  Object.keys(attributes).forEach(attr => elem.setAttribute(attr, attributes[attr]));
  return elem;
};

// Define all the functions
const setTitle = (data) => {
  const profileName = document.querySelector("#profileName");
  const profileSubTitle = document.querySelector("#profileSubTitle");
  const aboutIntro = document.querySelector("#aboutIntro");
  const contactEmail = document.querySelector("#contactEmail");
  const contactPhone = document.querySelector("#contactPhone");

  // Set page title
  document.title = `${data.title} | ${data.name}`;
  profileName.innerHTML = data.name;
  profileSubTitle.innerHTML = data.sub_title;
  aboutIntro.innerHTML = data.about.intro;
  contactEmail.innerHTML = data.about.contact.email;
  contactEmail.setAttribute("href", `mailto:${data.about.contact.email}`);
  contactPhone.innerHTML = data.about.contact.phone;
};

const setLinks = (links) => {
  const linksList = document.querySelector("#linksList");
  links.forEach((link) => {
    const linkItem = createElement('div', ['contact-item']);
    const title = createElement('span', ['contact-logo']);
    const icon = createElement('i', [link.iconClass]);
    title.appendChild(icon);

    linkItem.appendChild(title);

    const a = createElement('a', ['link-src', 'contact-info'], link.title, { href: link.src, target: "_blank", rel: "noopener noreferrer" });
    linkItem.appendChild(a);

    linksList.appendChild(linkItem);
  });
};

const setEducation = (education) => {
  const ul = document.querySelector("#educationList");
  education.forEach((edu) => {
    const li = createElement('li');
    const eduHeader = createElement('div', ['edu-header']);
    const eduAlma = createElement('span', ['edu-alma'], edu.alma);
    
    eduHeader.appendChild(eduAlma);
    li.appendChild(eduHeader);

    const eduClassData = createElement('div', ['edu-class-data']);
    const eduStd = createElement('span', ['edu-std'], edu.std);

    
    eduClassData.appendChild(eduStd);

    li.appendChild(eduClassData);

    ul.appendChild(li);
  });
};

const setSkills = (skills) => {
  const skillList = document.querySelector("#skillList");
  skills.forEach((skill) => {
    const catSkillItem = createElement('li', ['cat-skill-item']);
    const skillTitle = createElement('span', ['cat-skill-type'], `${skill.title}: `);
    const skillValue = createElement('span', ['skill-value'], skill.value);
    
    catSkillItem.appendChild(skillTitle);
    catSkillItem.appendChild(skillValue);
    skillList.appendChild(catSkillItem);
  });
};

const setExperience = (experiences) => {
  const expList = document.querySelector("#experienceList");
  experiences.forEach((exper) => {
    const expListItem = createElement('li');
    const expItem = createElement('div', ['exp-item']);
    const expOrg = createElement('span', ['exp-org'], exper.organization);
    const expTitle = createElement('span', ['exp-title'], `&nbsp- ${exper.title}`);
    const expDura = createElement('span', ['exp-title'], `, (${exper.date})`);
    
    expItem.appendChild(expOrg);
    expItem.appendChild(expTitle);
    expItem.appendChild(expDura);
    expListItem.appendChild(expItem);

    if (exper.details) {
      const expDetails = createElement('ul', ['expDet']);
      exper.details.forEach((dText) => {
        const detItem = createElement('li', [], dText);
        expDetails.appendChild(detItem);
      });
      expListItem.appendChild(expDetails);
    }

    expList.appendChild(expListItem);
  });
};

const setCategoryHeader = (title) => {
  const catHeader = createElement('div', ['cat-header']);
  const catIndicator = createElement('span', ['cat-indicator']);
  const i = createElement('i', ['fa', 'fa-chevron-right']);
  catIndicator.appendChild(i);

  const catTitle = createElement('span', ['cat-title'], title);
  
  catHeader.appendChild(catIndicator);
  catHeader.appendChild(catTitle);

  return catHeader;
};

// Entry Function, IIFE
(() => { 
  // Call functions to load profile
  setTitle(profileData);
  setLinks(profileData.links);
  setExperience(profileData.experiences);
  setSkills(profileData.skills);
  setEducation(profileData.education);
})();
