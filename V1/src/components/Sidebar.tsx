import { Link } from "react-router-dom";
import { Award, TrendingUp, TrendingDown } from "lucide-react";

const schemes = [
  { name: "Ayushman Bharat", description: "Health Insurance Scheme", tag: "Health Care", tagColor: "text-primary" },
  { name: "Startup India", description: "Support for Entrepreneurs", tag: "Business", tagColor: "text-primary" },
];

const news = [
  { title: "RBI announces new monetary policy....", source: "Economic Times", time: "2h ago" },
  { title: "Tech stocks rally amid global market...", source: "Business Standard", time: "4h ago" },
];

const marketIndex = [
  { name: "NIFTY 50", value: "22,456.80", change: "+1.24%", up: true },
  { name: "SENSEX", value: "78,892.45", change: "+0.98%", up: true },
];

const metalRates = [
  { name: "Gold", unit: "/10g", price: "₹ 62,450", change: "+0.45%", up: true, color: "bg-primary" },
  { name: "Silver", unit: "/kg", price: "₹ 74,200", change: "-0.12%", up: false, color: "bg-muted-foreground" },
];

export function Sidebar() {
  return (
    <aside className="w-80 space-y-4">
      {/* Gov. Schemes */}
      <div className="bg-card rounded-xl border border-border p-4">
        <div className="flex items-center gap-2 mb-3">
          <Award className="h-4 w-4 text-primary" />
          <h3 className="font-heading font-semibold text-foreground">Gov. Schemes</h3>
        </div>
        <div className="space-y-3">
          {schemes.map((scheme) => (
            <div key={scheme.name} className="space-y-1">
              <p className="font-medium text-foreground">{scheme.name}</p>
              <p className="text-sm text-muted-foreground">{scheme.description}</p>
              <span className={`text-xs ${scheme.tagColor}`}>{scheme.tag}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-3">
          <Link
            to="/gov-schemes"
            className="text-xs px-3 py-1 rounded border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            View More
          </Link>
        </div>
      </div>

      {/* Latest News */}
      <div className="bg-card rounded-xl border border-border p-4">
        <h3 className="font-heading font-semibold text-foreground mb-3">Latest News</h3>
        <div className="space-y-3">
          {news.map((item, index) => (
            <div key={index} className="space-y-1">
              <p className="font-medium text-foreground text-sm">{item.title}</p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>{item.source}</span>
                <span>•</span>
                <span>{item.time}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-3">
          <Link
            to="/latest-news"
            className="text-xs px-3 py-1 rounded border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            View More
          </Link>
        </div>
      </div>

      {/* Market Index */}
      <div className="bg-card rounded-xl border border-border p-4">
        <h3 className="font-heading font-semibold text-foreground mb-3">Market Index</h3>
        <div className="space-y-3">
          {marketIndex.map((item) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm text-foreground">{item.name}</span>
                <span className={`flex items-center gap-1 text-xs ${item.up ? 'text-success' : 'text-danger'}`}>
                  {item.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                  {item.change}
                </span>
              </div>
              <span className="font-medium text-foreground">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Metal Rates */}
      <div className="bg-card rounded-xl border border-border p-4">
        <h3 className="font-heading font-semibold text-foreground mb-3">Metal Rates</h3>
        <div className="space-y-3">
          {metalRates.map((item) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full ${item.color}`} />
                <div>
                  <p className="text-sm text-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.unit}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-foreground">{item.price}</p>
                <p className={`text-xs ${item.up ? 'text-success' : 'text-danger'}`}>{item.change}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
