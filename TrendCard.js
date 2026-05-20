function TrendCard({ hasData, trendCanvasRef }) {
    return (
        <article className="panel chart-panel">
            <div className="panel-title-row">
                <h3>Trend</h3>
                <span className="panel-subtitle">Победы в последних матчах</span>
            </div>
            {!hasData ? <p className="panel-placeholder">График появится после поиска игрока</p> : null}
            <canvas className={`chart-canvas ${!hasData ? "chart-muted" : ""}`} ref={trendCanvasRef} />
        </article>
    );
}

window.TrendCard = TrendCard;
