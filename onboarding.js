// ── ONBOARDING WIZARD ──

// ── TEMPLATES MASCULINOS ──
const TEMPLATES_M={
  fullbody_3:{
    exercises:[
      [{name:"Sentadilla",type:"pesas"},{name:"Press banca",type:"pesas"},{name:"Remo con barra",type:"pesas"},{name:"Press militar",type:"pesas"},{name:"Curl con barra",type:"pesas"},{name:"Tríceps en polea",type:"pesas"}],
      [{name:"Peso muerto rumano",type:"pesas"},{name:"Press inclinado",type:"pesas"},{name:"Jalón al pecho",type:"pesas"},{name:"Elevaciones laterales",type:"pesas"},{name:"Curl martillo",type:"pesas"},{name:"Press francés",type:"pesas"}],
      [{name:"Sentadilla búlgara",type:"pesas"},{name:"Press con mancuernas",type:"pesas"},{name:"Remo con mancuerna",type:"pesas"},{name:"Press Arnold",type:"pesas"},{name:"Curl con mancuernas",type:"pesas"},{name:"Fondos en banco",type:"pesas"}]
    ],labels:["Full Body A","Full Body B","Full Body C"]
  },
  fullbody_cardio_3:{
    exercises:[
      [{name:"Sentadilla",type:"pesas"},{name:"Press banca",type:"pesas"},{name:"Remo con barra",type:"pesas"},{name:"Press militar",type:"pesas"},{name:"Plancha",type:"pesas"}],
      [{name:"Correr",type:"cardio"},{name:"Elíptica",type:"cardio"}],
      [{name:"Peso muerto rumano",type:"pesas"},{name:"Press inclinado",type:"pesas"},{name:"Jalón al pecho",type:"pesas"},{name:"Elevaciones laterales",type:"pesas"},{name:"Crunch",type:"pesas"}]
    ],labels:["Full Body","Cardio","Full Body"]
  },
  upperlower_4:{
    exercises:[
      [{name:"Press banca",type:"pesas"},{name:"Remo con barra",type:"pesas"},{name:"Press militar",type:"pesas"},{name:"Curl con barra",type:"pesas"},{name:"Tríceps en polea",type:"pesas"},{name:"Elevaciones laterales",type:"pesas"}],
      [{name:"Sentadilla",type:"pesas"},{name:"Prensa de pierna",type:"pesas"},{name:"Curl femoral",type:"pesas"},{name:"Pantorrillas",type:"pesas"},{name:"Hip thrust",type:"pesas"}],
      [{name:"Press inclinado",type:"pesas"},{name:"Jalón al pecho",type:"pesas"},{name:"Press Arnold",type:"pesas"},{name:"Curl martillo",type:"pesas"},{name:"Press francés",type:"pesas"},{name:"Face pull",type:"pesas"}],
      [{name:"Peso muerto rumano",type:"pesas"},{name:"Sentadilla búlgara",type:"pesas"},{name:"Extensiones cuádriceps",type:"pesas"},{name:"Curl femoral",type:"pesas"},{name:"Pantorrillas",type:"pesas"}]
    ],labels:["Upper A","Lower A","Upper B","Lower B"]
  },
  pplul_5:{
    exercises:[
      [{name:"Press banca",type:"pesas"},{name:"Press inclinado",type:"pesas"},{name:"Press militar",type:"pesas"},{name:"Elevaciones laterales",type:"pesas"},{name:"Tríceps en polea",type:"pesas"},{name:"Press francés",type:"pesas"}],
      [{name:"Jalón al pecho",type:"pesas"},{name:"Remo con barra",type:"pesas"},{name:"Face pull",type:"pesas"},{name:"Curl con barra",type:"pesas"},{name:"Curl martillo",type:"pesas"}],
      [{name:"Sentadilla",type:"pesas"},{name:"Prensa de pierna",type:"pesas"},{name:"Peso muerto rumano",type:"pesas"},{name:"Curl femoral",type:"pesas"},{name:"Pantorrillas",type:"pesas"},{name:"Hip thrust",type:"pesas"}],
      [{name:"Press inclinado",type:"pesas"},{name:"Jalón al pecho",type:"pesas"},{name:"Press Arnold",type:"pesas"},{name:"Curl con barra",type:"pesas"},{name:"Tríceps en polea",type:"pesas"},{name:"Elevaciones laterales",type:"pesas"}],
      [{name:"Sentadilla búlgara",type:"pesas"},{name:"Extensiones cuádriceps",type:"pesas"},{name:"Curl femoral",type:"pesas"},{name:"Hip thrust",type:"pesas"},{name:"Pantorrillas",type:"pesas"}]
    ],labels:["Push","Pull","Legs","Upper","Lower"]
  },
  ppl_6:{
    exercises:[
      [{name:"Press banca",type:"pesas"},{name:"Press inclinado",type:"pesas"},{name:"Aperturas mancuernas",type:"pesas"},{name:"Press militar",type:"pesas"},{name:"Elevaciones laterales",type:"pesas"},{name:"Tríceps en polea",type:"pesas"}],
      [{name:"Jalón al pecho",type:"pesas"},{name:"Remo con barra",type:"pesas"},{name:"Remo con mancuerna",type:"pesas"},{name:"Face pull",type:"pesas"},{name:"Curl con barra",type:"pesas"},{name:"Curl martillo",type:"pesas"}],
      [{name:"Sentadilla",type:"pesas"},{name:"Prensa de pierna",type:"pesas"},{name:"Peso muerto rumano",type:"pesas"},{name:"Curl femoral",type:"pesas"},{name:"Hip thrust",type:"pesas"},{name:"Pantorrillas",type:"pesas"}],
      [{name:"Press inclinado",type:"pesas"},{name:"Aperturas en polea",type:"pesas"},{name:"Press Arnold",type:"pesas"},{name:"Elevaciones frontales",type:"pesas"},{name:"Press francés",type:"pesas"},{name:"Fondos en banco",type:"pesas"}],
      [{name:"Dominadas",type:"pesas"},{name:"Remo en polea baja",type:"pesas"},{name:"Pájaros",type:"pesas"},{name:"Curl con mancuernas",type:"pesas"},{name:"Curl predicador",type:"pesas"}],
      [{name:"Sentadilla frontal",type:"pesas"},{name:"Zancadas",type:"pesas"},{name:"Extensiones cuádriceps",type:"pesas"},{name:"Curl femoral",type:"pesas"},{name:"Pantorrillas",type:"pesas"},{name:"Abductores en máquina",type:"pesas"}]
    ],labels:["Push","Pull","Legs","Push","Pull","Legs"]
  }
};

// ── TEMPLATES FEMENINOS ──
// Basado en evidencia: glúteos 2-3x/semana, más lower que upper,
// hip thrust como movimiento principal, ejercicios unilaterales para
// estabilidad de cadera, cardio con Stairmaster para activar glúteos.
// Las mujeres recuperan más rápido (24-48h vs 48-72h hombres) permitiendo
// mayor frecuencia de glúteos.
const TEMPLATES_F={
  // 3 días: Full body con prioridad glúteos en cada sesión
  fullbody_3:{
    exercises:[
      [{name:"Hip thrust",type:"pesas"},{name:"Sentadilla",type:"pesas"},{name:"Press con mancuernas",type:"pesas"},{name:"Jalón al pecho",type:"pesas"},{name:"Abductores en máquina",type:"pesas"},{name:"Plancha",type:"pesas"}],
      [{name:"Peso muerto rumano",type:"pesas"},{name:"Zancadas",type:"pesas"},{name:"Remo con mancuerna",type:"pesas"},{name:"Press militar",type:"pesas"},{name:"Patada de glúteo",type:"pesas"},{name:"Elevación de piernas",type:"pesas"}],
      [{name:"Sentadilla búlgara",type:"pesas"},{name:"Puente de glúteo",type:"pesas"},{name:"Press con mancuernas",type:"pesas"},{name:"Remo en polea baja",type:"pesas"},{name:"Curl femoral",type:"pesas"},{name:"Crunch",type:"pesas"}]
    ],labels:["Full Body A","Full Body B","Full Body C"]
  },
  // 3 días fat loss: 2 full body + 1 cardio con Stairmaster
  fullbody_cardio_3:{
    exercises:[
      [{name:"Hip thrust",type:"pesas"},{name:"Sentadilla",type:"pesas"},{name:"Jalón al pecho",type:"pesas"},{name:"Press con mancuernas",type:"pesas"},{name:"Abductores en máquina",type:"pesas"},{name:"Plancha",type:"pesas"}],
      [{name:"Stairmaster",type:"cardio"},{name:"Elíptica",type:"cardio"}],
      [{name:"Peso muerto rumano",type:"pesas"},{name:"Sentadilla búlgara",type:"pesas"},{name:"Remo con mancuerna",type:"pesas"},{name:"Press militar",type:"pesas"},{name:"Patada de glúteo",type:"pesas"},{name:"Elevación de piernas",type:"pesas"}]
    ],labels:["Full Body","Cardio","Full Body"]
  },
  // 4 días: 2 lower (glúteo-focus) + 2 upper, glúteos se trabajan 2x/semana
  upperlower_4:{
    exercises:[
      [{name:"Hip thrust",type:"pesas"},{name:"Sentadilla",type:"pesas"},{name:"Curl femoral",type:"pesas"},{name:"Abductores en máquina",type:"pesas"},{name:"Patada de glúteo",type:"pesas"},{name:"Plancha",type:"pesas"}],
      [{name:"Press con mancuernas",type:"pesas"},{name:"Jalón al pecho",type:"pesas"},{name:"Press militar",type:"pesas"},{name:"Remo con mancuerna",type:"pesas"},{name:"Elevaciones laterales",type:"pesas"},{name:"Tríceps en polea",type:"pesas"}],
      [{name:"Peso muerto rumano",type:"pesas"},{name:"Sentadilla búlgara",type:"pesas"},{name:"Prensa de pierna",type:"pesas"},{name:"Puente de glúteo",type:"pesas"},{name:"Pantorrillas",type:"pesas"},{name:"Elevación de piernas",type:"pesas"}],
      [{name:"Press inclinado",type:"pesas"},{name:"Remo en polea baja",type:"pesas"},{name:"Face pull",type:"pesas"},{name:"Curl con mancuernas",type:"pesas"},{name:"Elevaciones laterales",type:"pesas"},{name:"Crunch",type:"pesas"}]
    ],labels:["Glúteos & Piernas A","Upper A","Glúteos & Piernas B","Upper B"]
  },
  // 5 días: 3 lower + 2 upper, glúteos se trabajan 3x/semana
  pplul_5:{
    exercises:[
      [{name:"Hip thrust",type:"pesas"},{name:"Sentadilla",type:"pesas"},{name:"Curl femoral",type:"pesas"},{name:"Abductores en máquina",type:"pesas"},{name:"Patada de glúteo",type:"pesas"},{name:"Plancha",type:"pesas"}],
      [{name:"Press con mancuernas",type:"pesas"},{name:"Jalón al pecho",type:"pesas"},{name:"Press militar",type:"pesas"},{name:"Remo con mancuerna",type:"pesas"},{name:"Elevaciones laterales",type:"pesas"},{name:"Tríceps en polea",type:"pesas"}],
      [{name:"Peso muerto rumano",type:"pesas"},{name:"Sentadilla búlgara",type:"pesas"},{name:"Prensa de pierna",type:"pesas"},{name:"Puente de glúteo",type:"pesas"},{name:"Pantorrillas",type:"pesas"},{name:"Elevación de piernas",type:"pesas"}],
      [{name:"Press inclinado",type:"pesas"},{name:"Remo en polea baja",type:"pesas"},{name:"Face pull",type:"pesas"},{name:"Curl con mancuernas",type:"pesas"},{name:"Elevaciones laterales",type:"pesas"},{name:"Crunch",type:"pesas"}],
      [{name:"Hip thrust",type:"pesas"},{name:"Zancadas",type:"pesas"},{name:"Peso muerto sumo",type:"pesas"},{name:"Curl femoral",type:"pesas"},{name:"Abductores en máquina",type:"pesas"},{name:"Stairmaster",type:"cardio"}]
    ],labels:["Glúteos Heavy","Upper Push","Piernas & Core","Upper Pull","Glúteos & Cardio"]
  },
  // 6 días: 3 lower + 2 upper + 1 cardio/core, glúteos 3x/semana
  ppl_6:{
    exercises:[
      [{name:"Hip thrust",type:"pesas"},{name:"Sentadilla",type:"pesas"},{name:"Curl femoral",type:"pesas"},{name:"Abductores en máquina",type:"pesas"},{name:"Patada de glúteo",type:"pesas"},{name:"Plancha",type:"pesas"}],
      [{name:"Press con mancuernas",type:"pesas"},{name:"Jalón al pecho",type:"pesas"},{name:"Press militar",type:"pesas"},{name:"Remo con mancuerna",type:"pesas"},{name:"Elevaciones laterales",type:"pesas"},{name:"Tríceps en polea",type:"pesas"}],
      [{name:"Peso muerto rumano",type:"pesas"},{name:"Sentadilla búlgara",type:"pesas"},{name:"Prensa de pierna",type:"pesas"},{name:"Puente de glúteo",type:"pesas"},{name:"Pantorrillas",type:"pesas"},{name:"Elevación de piernas",type:"pesas"}],
      [{name:"Press inclinado",type:"pesas"},{name:"Remo en polea baja",type:"pesas"},{name:"Face pull",type:"pesas"},{name:"Curl con mancuernas",type:"pesas"},{name:"Press Arnold",type:"pesas"},{name:"Crunch",type:"pesas"}],
      [{name:"Hip thrust",type:"pesas"},{name:"Zancadas",type:"pesas"},{name:"Peso muerto sumo",type:"pesas"},{name:"Aductores en máquina",type:"pesas"},{name:"Curl femoral",type:"pesas"},{name:"Abductores en máquina",type:"pesas"}],
      [{name:"Stairmaster",type:"cardio"},{name:"Elíptica",type:"cardio"},{name:"Crunch",type:"pesas"},{name:"Russian twist",type:"pesas"},{name:"Elevación de piernas",type:"pesas"},{name:"Plancha",type:"pesas"}]
    ],labels:["Glúteos Heavy","Upper Push","Piernas","Upper Pull","Glúteos & Aductores","Cardio & Core"]
  }
};

const ROUTINE_TEMPLATES=TEMPLATES_M;

function selectTemplate(experience,numDays,goal,sex){
  const templates=sex==='M'?TEMPLATES_F:TEMPLATES_M;
  // Perder grasa + principiante → add cardio day
  if(goal==='grasa'&&experience==='principiante'&&numDays<=3)return{key:'fullbody_cardio_3',templates};
  if(numDays<=3)return{key:'fullbody_3',templates};
  if(numDays===4)return{key:'upperlower_4',templates};
  if(numDays===5)return{key:'pplul_5',templates};
  return{key:'ppl_6',templates};
}

function getDaysWarning(experience,numDays){
  if(experience==='principiante'&&numDays>=5)return'La ciencia recomienda 3-4 días para principiantes. La recuperación es clave para crecer.';
  if(experience==='intermedio'&&numDays>=6)return'Para tu nivel, 4-5 días es lo óptimo. Más no siempre es mejor.';
  return null;
}

function getSuggestedDays(activity,experience){
  // Suggest based on activity level + experience
  if(experience==='principiante')return activity<=1?3:activity<=3?3:4;
  if(experience==='intermedio')return activity<=1?3:activity<=2?4:5;
  return activity<=1?4:activity<=2?4:activity<=3?5:6;
}

function goalToObjective(goal){
  if(goal==='musculo')return'hipertrofia';
  if(goal==='fuerza')return'fuerza';
  if(goal==='grasa')return'resistencia';
  return'hipertrofia';
}

function buildRoutineFromWizard(templateKey,selectedDays,templates){
  const tmpl=(templates||TEMPLATES_M)[templateKey];
  const allDK=["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
  const routine={};
  let exIdx=0;
  allDK.forEach(dk=>{
    if(selectedDays.includes(dk)&&exIdx<tmpl.exercises.length){
      routine[dk]={label:tmpl.labels[exIdx],rest:false,exercises:[...tmpl.exercises[exIdx]]};
      exIdx++;
    } else {
      routine[dk]={label:"Descanso",rest:true,exercises:[]};
    }
  });
  return routine;
}

// ── Wizard State ──
const WIZARD_STEPS=5;
let wizardStep=1;
let wizardData={name:'',age:'',sex:'H',height:'',weight:'',activityLevel:2,goal:null,experience:null,selectedDays:[]};

const _svg='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">';
const ACTIVITY_OPTS=[
  {i:0,l:'Sedentario',d:'Trabajo de oficina, sin ejercicio',ico:_svg+'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'},
  {i:1,l:'Ligero',d:'Caminas a diario o 1-2 días de gym',ico:_svg+'<path d="M13 4v16"/><path d="M17 4v16"/><rect x="5" y="8" width="14" height="8" rx="1" fill="none"/></svg>'},
  {i:2,l:'Moderado',d:'3-4 días de gym por semana',ico:_svg+'<line x1="4" y1="12" x2="20" y2="12"/><rect x="2" y="9" width="4" height="6" rx="1.5"/><rect x="18" y="9" width="4" height="6" rx="1.5"/></svg>'},
  {i:3,l:'Activo',d:'5-6 días de gym o deporte frecuente',ico:_svg+'<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>'},
  {i:4,l:'Muy activo',d:'Entrenas 2 veces al día o trabajo físico',ico:_svg+'<path d="M12 22c4.97 0 7-3.58 7-7.5 0-4.05-3.5-7.5-7-10.5-3.5 3-7 6.45-7 10.5C5 18.42 7.03 22 12 22z"/><path d="M12 22c2 0 3.5-1.5 3.5-4 0-2.5-1.75-4-3.5-5.5C10.25 14 8.5 15.5 8.5 18c0 2.5 1.5 4 3.5 4z"/></svg>'}
];

function showWizard(){
  const hasExisting=Object.values(db.routine).some(d=>d.exercises?.length>0);
  if(hasExisting&&localStorage.getItem('gym_onboarded')){
    if(!confirm('Esto reemplazará tu rutina actual. ¿Continuar?'))return;
  }
  wizardStep=1;
  wizardData={name:db.profile.name||'',age:db.profile.age||'',sex:db.profile.sex||'H',height:db.profile.height||'',weight:db.profile.weight||'',activityLevel:db.profile.activityLevel??2,goal:null,experience:null,selectedDays:[]};
  document.getElementById('wizard-overlay').style.display='flex';
  renderWizardStep();
}
function hideWizard(){document.getElementById('wizard-overlay').style.display='none';}

function renderWizardStep(){
  const container=document.getElementById('wizard-content');
  const dots=document.getElementById('wizard-dots');
  dots.innerHTML=Array.from({length:WIZARD_STEPS},(_,i)=>i+1).map(n=>`<span class="wiz-dot ${n===wizardStep?'active':''}${n<wizardStep?' done':''}"></span>`).join('');

  if(wizardStep===1){
    // DATOS PERSONALES
    container.innerHTML=`
      <div class="wiz-title">Sobre ti</div>
      <div class="wiz-subtitle">Si no sabes algún dato, déjalo vacío</div>
      <div class="wiz-form">
        <div class="wiz-field"><label class="wiz-label">NOMBRE</label><input class="wiz-input" type="text" id="wiz-name" value="${wizardData.name}" placeholder="Tu nombre"></div>
        <div class="wiz-row">
          <div class="wiz-field"><label class="wiz-label">EDAD</label><input class="wiz-input wiz-num" type="number" id="wiz-age" value="${wizardData.age}" placeholder="25" min="10" max="99"></div>
          <div class="wiz-field"><label class="wiz-label">SEXO</label><div class="wiz-sex-row"><div class="wiz-sex ${wizardData.sex==='H'?'active':''}" onclick="wizardData.sex='H';renderWizardStep()">H</div><div class="wiz-sex ${wizardData.sex==='M'?'active':''}" onclick="wizardData.sex='M';renderWizardStep()">M</div></div></div>
        </div>
        <div class="wiz-row">
          <div class="wiz-field"><label class="wiz-label">ALTURA (cm)</label><input class="wiz-input wiz-num" type="number" id="wiz-height" value="${wizardData.height}" placeholder="175" min="100" max="230"></div>
          <div class="wiz-field"><label class="wiz-label">PESO (kg)</label><input class="wiz-input wiz-num" type="number" id="wiz-weight" value="${wizardData.weight}" placeholder="75" min="30" max="300" step="0.1"></div>
        </div>
      </div>
      <button class="sbtn" onclick="wizNextProfile()" style="margin-top:16px">CONTINUAR</button>`;

  } else if(wizardStep===2){
    // NIVEL DE ACTIVIDAD
    container.innerHTML=`
      <div class="wiz-title">Tu estilo de vida</div>
      <div class="wiz-subtitle">Esto nos ayuda a calcular tus calorías y sugerirte días de entrenamiento</div>
      <div class="wiz-options">
        ${ACTIVITY_OPTS.map(a=>`<div class="wiz-opt ${wizardData.activityLevel===a.i?'active':''}" onclick="wizSelectActivity(${a.i})">
          <span class="wiz-emoji wiz-svg-ico">${a.ico}</span>
          <div><span class="wiz-opt-title">${a.l}</span><span class="wiz-opt-desc">${a.d}</span></div>
        </div>`).join('')}
      </div>`;

  } else if(wizardStep===3){
    // OBJETIVO — adaptado por sexo
    const isFem=wizardData.sex==='M';
    const goals=isFem?[
      {key:'musculo',title:'Tonificar y definir',desc:'Hipertrofia · 3-4 series × 10-15 reps · Enfoque en glúteos, piernas y core'},
      {key:'fuerza',title:'Ganar fuerza',desc:'Fuerza funcional · 4-5 series × 5-8 reps · Sentadilla, peso muerto, hip thrust'},
      {key:'grasa',title:'Perder grasa',desc:'Resistencia + cardio · 3 series × 15-20 reps · Circuitos y HIIT'},
      {key:'general',title:'Estar en forma',desc:'General · 3 series × 10-12 reps · Equilibrio de todo el cuerpo'},
    ]:[
      {key:'musculo',title:'Ganar músculo',desc:'Hipertrofia · 3-4 series × 8-12 reps'},
      {key:'fuerza',title:'Ganar fuerza',desc:'Fuerza · 4-5 series × 3-6 reps'},
      {key:'grasa',title:'Perder grasa',desc:'Resistencia + cardio · 3 series × 12-15 reps'},
      {key:'general',title:'Estar en forma',desc:'General · 3 series × 8-12 reps'},
    ];
    const goalIcons={musculo:_svg+'<path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg>',fuerza:_svg+'<line x1="4" y1="12" x2="20" y2="12"/><rect x="2" y="9" width="4" height="6" rx="1.5"/><rect x="18" y="9" width="4" height="6" rx="1.5"/></svg>',grasa:_svg+'<path d="M12 22c4.97 0 7-3.58 7-7.5 0-4.05-3.5-7.5-7-10.5-3.5 3-7 6.45-7 10.5C5 18.42 7.03 22 12 22z"/></svg>',general:_svg+'<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>'};
    container.innerHTML=`
      <div class="wiz-title">¿Cuál es tu objetivo?</div>
      <div class="wiz-subtitle">Adaptamos ejercicios, series y repeticiones</div>
      <div class="wiz-options">
        ${goals.map(g=>`<div class="wiz-opt ${wizardData.goal===g.key?'active':''}" onclick="wizSelect('goal','${g.key}')">
          <span class="wiz-emoji wiz-svg-ico">${goalIcons[g.key]}</span>
          <div><span class="wiz-opt-title">${g.title}</span><span class="wiz-opt-desc">${g.desc}</span></div>
        </div>`).join('')}
      </div>`;

  } else if(wizardStep===4){
    // EXPERIENCIA
    container.innerHTML=`
      <div class="wiz-title">¿Cuánta experiencia tienes?</div>
      <div class="wiz-subtitle">Esto define la complejidad de tu rutina</div>
      <div class="wiz-options">
        <div class="wiz-opt ${wizardData.experience==='principiante'?'active':''}" onclick="wizSelect('experience','principiante')">
          <span class="wiz-emoji wiz-svg-ico">${_svg}<circle cx="12" cy="12" r="3"/><path d="M12 3v3"/><path d="M12 18v3"/></svg></span>
          <div><span class="wiz-opt-title">Nunca he entrenado</span><span class="wiz-opt-desc">Empezamos con lo básico — ejercicios compuestos</span></div>
        </div>
        <div class="wiz-opt ${wizardData.experience==='intermedio'?'active':''}" onclick="wizSelect('experience','intermedio')">
          <span class="wiz-emoji wiz-svg-ico">${_svg}<polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg></span>
          <div><span class="wiz-opt-title">Menos de 1 año</span><span class="wiz-opt-desc">Ya conoces los ejercicios — más variedad y volumen</span></div>
        </div>
        <div class="wiz-opt ${wizardData.experience==='avanzado'?'active':''}" onclick="wizSelect('experience','avanzado')">
          <span class="wiz-emoji wiz-svg-ico">${_svg}<path d="M6 9H3a1 1 0 0 0-1 1v1a4 4 0 0 0 4 4h0"/><path d="M18 9h3a1 1 0 0 1 1 1v1a4 4 0 0 1-4 4h0"/><path d="M7 4h10v7a5 5 0 0 1-10 0V4z"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="16" x2="12" y2="20"/></svg></span>
          <div><span class="wiz-opt-title">Más de 1 año</span><span class="wiz-opt-desc">Rutinas avanzadas — mayor frecuencia y especificidad</span></div>
        </div>
      </div>`;

  } else if(wizardStep===5){
    // DÍAS — con sugerencia basada en actividad + experiencia
    const suggested=getSuggestedDays(wizardData.activityLevel,wizardData.experience);
    const warning=wizardData.selectedDays.length?getDaysWarning(wizardData.experience,wizardData.selectedDays.length):null;
    const allDays=[
      {key:"lunes",label:"L"},{key:"martes",label:"M"},{key:"miercoles",label:"X"},
      {key:"jueves",label:"J"},{key:"viernes",label:"V"},{key:"sabado",label:"S"},{key:"domingo",label:"D"}
    ];
    container.innerHTML=`
      <div class="wiz-title">¿Qué días entrenas?</div>
      <div class="wiz-subtitle">Basado en tu actividad y nivel, te recomendamos <strong>${suggested} días</strong></div>
      <div class="wiz-day-picker">
        ${allDays.map(d=>`<div class="wiz-day-btn ${wizardData.selectedDays.includes(d.key)?'active':''}" onclick="toggleWizDay('${d.key}')">${d.label}</div>`).join('')}
      </div>
      <div class="wiz-day-count">${wizardData.selectedDays.length} de ${suggested} recomendados</div>
      ${warning?`<div class="wiz-warning">${warning}</div>`:''}
      ${wizardData.selectedDays.length>=3?`<button class="sbtn" onclick="showWizardResult()" style="margin-top:16px">VER MI RUTINA</button>`:'<div class="wiz-hint">Selecciona al menos 3 días</div>'}`;
  }
}

function wizNextProfile(){
  wizardData.name=document.getElementById('wiz-name').value.trim();
  wizardData.age=document.getElementById('wiz-age').value;
  wizardData.height=document.getElementById('wiz-height').value;
  wizardData.weight=document.getElementById('wiz-weight').value;
  wizardStep=2;renderWizardStep();
}

function wizSelectActivity(level){
  wizardData.activityLevel=level;
  renderWizardStep();
  setTimeout(()=>{wizardStep=3;renderWizardStep();},300);
}

function wizSelect(key,value){
  wizardData[key]=value;
  renderWizardStep();
  setTimeout(()=>{if(wizardStep<WIZARD_STEPS){wizardStep++;renderWizardStep();}},300);
}

function toggleWizDay(dk){
  const idx=wizardData.selectedDays.indexOf(dk);
  if(idx>=0)wizardData.selectedDays.splice(idx,1);
  else if(wizardData.selectedDays.length<6)wizardData.selectedDays.push(dk);
  const order=["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
  wizardData.selectedDays.sort((a,b)=>order.indexOf(a)-order.indexOf(b));
  renderWizardStep();
}

function showWizardResult(){
  const numDays=wizardData.selectedDays.length;
  const {key:templateKey,templates}=selectTemplate(wizardData.experience,numDays,wizardData.goal,wizardData.sex);
  const routine=buildRoutineFromWizard(templateKey,wizardData.selectedDays,templates);
  const container=document.getElementById('wizard-content');
  document.getElementById('wizard-dots').innerHTML='';

  const splitNames={fullbody_3:'Full Body',fullbody_cardio_3:'Full Body + Cardio',upperlower_4:'Upper / Lower',pplul_5:'PPLUL',ppl_6:'Push / Pull / Legs'};
  const dl={lunes:"Lun",martes:"Mar",miercoles:"Mié",jueves:"Jue",viernes:"Vie",sabado:"Sáb",domingo:"Dom"};
  const allDK=["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];

  let preview=allDK.map(dk=>{
    const day=routine[dk];
    if(day.rest)return`<div class="wiz-day-preview rest"><span class="wiz-dp-day">${dl[dk]}</span><span class="wiz-dp-label">Descanso</span></div>`;
    const exList=day.exercises.map(e=>`<span class="wiz-dp-ex">${e.name}</span>`).join('');
    return`<div class="wiz-day-preview"><div class="wiz-dp-top"><span class="wiz-dp-day">${dl[dk]}</span><span class="wiz-dp-label">${day.label}</span><span class="wiz-dp-count">${day.exercises.length}</span></div><div class="wiz-dp-exlist">${exList}</div></div>`;
  }).join('');

  container.innerHTML=`
    <div class="wiz-title">Tu rutina personalizada</div>
    <div class="wiz-subtitle">${numDays} días · ${splitNames[templateKey]||'Personalizada'}</div>
    <div class="wiz-preview">${preview}</div>
    <div class="wiz-result-note">Puedes cambiar ejercicios en cualquier momento desde <b>Perfil → Mi Rutina</b></div>
    <div class="wiz-result-actions">
      <button class="sbtn" onclick="applyWizardRoutine()">EMPEZAR A ENTRENAR</button>
      <button class="wiz-customize-btn" onclick="applyWizardRoutine(true)">PERSONALIZAR AHORA</button>
    </div>`;
}

function applyWizardRoutine(customize){
  const numDays=wizardData.selectedDays.length;
  const {key:templateKey,templates}=selectTemplate(wizardData.experience,numDays,wizardData.goal,wizardData.sex);
  const routine=buildRoutineFromWizard(templateKey,wizardData.selectedDays,templates);

  db.routine=routine;
  ps('gym_routine',db.routine);
  db.objective=goalToObjective(wizardData.goal);
  ps('gym_objective',db.objective);
  db.profile={
    ...db.profile,
    name:wizardData.name||'Usuario',
    age:wizardData.age||'25',
    sex:wizardData.sex||'H',
    height:wizardData.height||'175',
    weight:wizardData.weight||'75',
    activityLevel:wizardData.activityLevel??2,
  };
  ps('gym_profile',db.profile);
  localStorage.setItem('gym_onboarded','true');

  hideWizard();
  renderHeader();renderObj();renderHoy();

  if(customize){
    document.querySelector('.ni:nth-child(4)').click();
    setTimeout(()=>toggleDrop('rutina-section'),300);
  } else {
    toast('Rutina creada ✓');
  }
}

function checkOnboarding(){
  if(!localStorage.getItem('gym_onboarded')&&!db.sessions.length){
    showWizard();
  }
}
