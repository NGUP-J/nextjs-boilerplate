function Songblock({
  songname = "Song Name",
  date = "DD/MM/YYYY",
  ImageUrl = "/img/greenreg.svg/",
}) {
  return (
    <div className="Songblock-frame bgeffect px-4">
      <a className="left" href="/songdisplay1">
        <div>
          <img src={ImageUrl} />
        </div>
        <div className="only-text-frame">
          <div className="font700">{songname}</div>
          <div className="font400 text-grey">Last Modified : {date}</div>
        </div>
      </a>
      <div className="right">
        <a href="/detail" className="threedots">
          <img src="/img/3Dots.svg" />
        </a>
      </div>
    </div>
  );
}

export default Songblock;
