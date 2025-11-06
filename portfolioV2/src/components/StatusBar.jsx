export default function StatusBar(){
  const items = [
    {label:"API", value:"200 OK", color:"#34D399"},
    {label:"DB", value:"Connected", color:"#60A5FA"},
    {label:"Queue", value:"Idle", color:"#FBBF24"},
  ];
  return (
    <div className="status-bar">
      {items.map((it,i)=>(
        <div key={i} className="status-chip">
          <span className="led" style={{background:it.color}}></span>
          <span className="k">{it.label}</span>
          <span className="v">{it.value}</span>
        </div>
      ))}
    </div>
  );
}
