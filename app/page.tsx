'use client';

import { useState } from "react";
import { Play, Pause, Tv, MessageCircle, ListVideo, User, Send, Radio, LockKeyhole, Leaf } from "lucide-react";

const episodes = Array.from({ length: 5 }, (_, i) => ({ number: i + 1, title: `${i + 1}. Bölüm` }));

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { name: "DiziTutkunu", text: "Herkese iyi seyirler ❤️" },
    { name: "FerhundeFan", text: "Bu dizinin yeri gerçekten ayrı!" },
    { name: "Ali", text: "İyi akşamlar arkadaşlar." }
  ]);

  function sendMessage() {
    if (!loggedIn || !message.trim()) return;
    setMessages([...messages, { name: "Sen", text: message.trim() }]);
    setMessage("");
  }

  return <main className="site-shell">
    <header className="topbar">
      <a className="brand" href="#"><Leaf size={25}/><span>YAPRAK DÖKÜMÜ <small>TELEVİZYON</small></span></a>
      <span className="live-pill"><i/> CANLI YAYIN</span>
    </header>

    <section className="intro">
      <p className="eyebrow">KESİNTİSİZ DİZİ KEYFİ</p>
      <h1>Bir ailenin hikâyesi,<br/><em>hep birlikte.</em></h1>
      <p>Yayın akışına katıl, diğer izleyicilerle sohbet et.</p>
    </section>

    <section className="main-grid">
      <div className="left-column">
        <div className="section-heading"><div><Radio size={17}/><b>ŞU ANDA YAYINDA</b></div><span>7/24 YAYIN AKIŞI</span></div>
        <div className="player">
          <div className="player-art"><Tv size={48}/><strong>YAPRAK DÖKÜMÜ</strong><span>Canlı yayın oynatıcı alanı</span>
            <button className="play-button" onClick={() => setPlaying(!playing)}><span>{playing ? <Pause/> : <Play/>}</span>{playing ? "Önizlemeyi durdur" : "Yayın önizlemesi"}</button>
            <small className="demo-label">DEMO · GERÇEK VİDEO AKIŞI BAĞLI DEĞİL</small>
          </div>
          <div className="player-meta"><div><b>Yaprak Dökümü</b><span>Otomatik bölüm sıralaması</span></div><span className="live-pill"><i/> CANLI</span></div>
        </div>

        <div className="section-heading archive-heading"><div><ListVideo size={18}/><b>YAYIN SIRASI</b></div><span>SONRAKİ BÖLÜMLER</span></div>
        <div className="episode-list">{episodes.map(ep => <div className="episode" key={ep.number}><div className="episode-thumb"><Play size={17}/></div><div><b>{ep.title}</b><span>Yayın kuyruğunda</span></div><span className="queue">SIRADA</span></div>)}</div>
        <p className="note">Not: Bölüm dosyaları ve yayın hakları sağlandığında gerçek yayın akışı bağlanacaktır.</p>
      </div>

      <aside className="chat-card">
        <div className="chat-title"><div><MessageCircle size={19}/><b>İZLEYİCİ SOHBETİ</b></div><span className="members">● ÜYELERE ÖZEL</span></div>
        {!loggedIn ? <div className="login-gate"><LockKeyhole size={32}/><b>Sohbete katıl</b><p>Yayını herkes izleyebilir. Mesaj yazmak için giriş yapmalısın.</p><button onClick={() => setLoggedIn(true)}>Demo olarak giriş yap</button><small>Bu düğme prototip amaçlıdır; gerçek hesap oluşturmaz.</small></div> :
          <><div className="chat-messages">{messages.map((m, i) => <div className="chat-message" key={i}><b>{m.name}</b><p>{m.text}</p></div>)}</div><div className="chat-input"><input value={message} onChange={e => setMessage(e.target.value)} onKeyDown={e => e.key === "Enter" && sendMessage()} placeholder="Mesajını yaz..."/><button onClick={sendMessage} aria-label="Mesaj gönder"><Send size={17}/></button></div><button className="logout" onClick={() => setLoggedIn(false)}>Çıkış yap</button></>}
      </aside>
    </section>

    <footer><div className="brand"><Leaf size={20}/><span>YAPRAK DÖKÜMÜ TV</span></div><span>Bağımsız izleyici topluluğu · © 2026</span><nav><a href="#top"><Tv size={15}/> Canlı yayın</a><a href="#top"><User size={15}/> Hesabım</a></nav></footer>
  </main>;
}
