import { X } from "lucide-react";

export function BookingModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  const handleSubmit = () => {
    const name = (document.getElementById("bname") as HTMLInputElement).value;
    const phone = (document.getElementById("bphone") as HTMLInputElement).value;
    const date = (document.getElementById("bdate") as HTMLInputElement).value;
    const service = (document.getElementById("bservice") as HTMLSelectElement).value;
    const message = (document.getElementById("bmessage") as HTMLTextAreaElement).value;
    const text = `*New Appointment Request*%0A%0AName: ${name}%0APhone: ${phone}%0ADate: ${date}%0AService: ${service}%0AMessage: ${message}`;
    window.open(`https://wa.me/919901515300?text=${text}`, "_blank");
    onClose();
  };

  return (
    <div style={{position:"fixed",inset:0,zIndex:50,background:"rgba(0,0,0,0.6)",display:"flex",alignItems:"center",justifyContent:"center",padding:"1rem"}} onClick={onClose}>
      <div style={{background:"white",width:"100%",maxWidth:"28rem",borderRadius:"1rem",padding:"1.5rem"}} onClick={e => e.stopPropagation()}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"}}>
          <h3 style={{fontSize:"1.25rem",fontWeight:"bold",color:"#2e7bc4"}}>Book Appointment</h3>
          <button onClick={onClose} style={{padding:"0.5rem",cursor:"pointer",border:"none",background:"none"}}>
            <X size={20} />
          </button>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:"0.75rem"}}>
          <input id="bname" placeholder="Full Name" style={{padding:"0.75rem",borderRadius:"0.5rem",border:"1px solid #d1dce8",fontSize:"1rem",width:"100%",boxSizing:"border-box"}} />
          <input id="bphone" type="tel" placeholder="Phone Number" style={{padding:"0.75rem",borderRadius:"0.5rem",border:"1px solid #d1dce8",fontSize:"1rem",width:"100%",boxSizing:"border-box"}} />
          <input id="bdate" type="date" style={{padding:"0.75rem",borderRadius:"0.5rem",border:"1px solid #d1dce8",fontSize:"1rem",width:"100%",boxSizing:"border-box"}} />
          <select id="bservice" style={{padding:"0.75rem",borderRadius:"0.5rem",border:"1px solid #d1dce8",fontSize:"1rem",width:"100%",boxSizing:"border-box"}}>
            <option>General Medicine</option>
            <option>OB-GYN</option>
            <option>Ultrasound</option>
            <option>Pharmacy</option>
          </select>
          <textarea id="bmessage" placeholder="Message (optional)" rows={3} style={{padding:"0.75rem",borderRadius:"0.5rem",border:"1px solid #d1dce8",fontSize:"1rem",width:"100%",boxSizing:"border-box"}} />
          <button onClick={handleSubmit} style={{background:"linear-gradient(135deg,#2e7bc4,#5ba8d4)",color:"white",fontWeight:"600",padding:"1rem",borderRadius:"0.75rem",border:"none",cursor:"pointer",fontSize:"1rem",width:"100%"}}>
            Send via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}