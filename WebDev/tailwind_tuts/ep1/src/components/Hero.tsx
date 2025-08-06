
export function Hero(){
    return (
      <div className="hero-root">
        <div className="badge">
          <span>What are Form-1099 filling requirements?</span>
          <svg width="16" height="16" fill="none" className="">
            <path
              stroke="#1E1F25"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-opacity=".5"
              stroke-width="1.25"
              d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
            ></path>
          </svg>
        </div>
        <h1 className="hero-title">
          Magically simplify <br /> accounting and taxes
        </h1>
        <p className="hero-subtitle">
          Automated bookkeeping, effortless tax filing, real‑time insights. Set
          up in 10 mins. Back to building by 7:56am.
        </p>
        <div className="hero-cta">
          <button type="button" className="btn">
            Start free trial
          </button>
            <button type="button" className="btn btn-secondary">
              Pricing
            <svg width="16" height="16" fill="none" className="">
              <path
                stroke="#1E1F25"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-opacity=".5"
                stroke-width="1.25"
                d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"
              ></path>
            </svg>
            </button>
        </div>
      </div>
    );
}