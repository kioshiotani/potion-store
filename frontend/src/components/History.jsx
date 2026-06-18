import HistoryTimeLine from './HistoryTimeLine'

export default function History() {
    return (
        <section id="history" className={`p-5 mx-0 mx-md-5 d-flex flex-column justify-content-center align-items-center shadow-lg`}>
            <h1 className="display-4">História da Loja</h1>
            <div className={`w-75`}>
                <HistoryTimeLine />
            </div>
        </section>
    )
}