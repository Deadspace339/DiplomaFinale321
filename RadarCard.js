function RadarCard({ hasData, radarCanvasRef }) {
    return (
        <article className="panel chart-panel radar-card">
            <div className="panel-title-row">
                <h3>Radar</h3>
                <span className="panel-subtitle">Farm / Fight / Survive / Exp / Vers</span>
            </div>
            {!hasData ? <p className="panel-placeholder">Сначала найдите игрока</p> : null}
            <canvas className={`chart-canvas ${!hasData ? "chart-muted" : ""}`} ref={radarCanvasRef} />
        </article>
    );
}

window.RadarCard = RadarCard;
