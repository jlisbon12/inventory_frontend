import { useEffect, useState } from "react";
import { axiosRequest } from "../../utils/functions";
import { PurchaseSummaryUrl } from "../../utils/network";

interface PurchaseProps {
  price: number;
  count: number;
}

const Purchase = () => {
  const [data, setData] = useState<PurchaseProps>();
  const [loading, setLoading] = useState(true);

  const getTopSellData = async () => {
    const response = await axiosRequest<PurchaseProps>({
      url: PurchaseSummaryUrl,
      hasAuth: true,
    });
    setLoading(false);
    if (response) {
      const data = response.data;
      setData(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    getTopSellData();
  }, []);

  return (
    <div className="card">
      <h3>Purchases</h3>

      {loading ? (
        <div className="puchases">
          <div className="content">
            <div className="title">{data?.price}</div>
            <div className="info">(price)</div>
          </div>
          <br />
          <div className="content">
            <div className="title">{data?.count}</div>
            <div className="info">(count)</div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Purchase;
