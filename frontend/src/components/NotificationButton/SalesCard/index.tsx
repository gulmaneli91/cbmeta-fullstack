import "./styles.css";
import NotificationButton from "..";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function SalesCard () {
    return(
        <div className="cb-vendas-card">
        <h2>Pedidos</h2>
        <div>
            <div className="cb-vendas-formcontrol-container">
                <DatePicker
                    selected={new Date()}
                    onChange={(date: Date) => {}}
                    className="cb-vendas-formcontrol"
                    dateFormat="dd/MM/yyyy"
                />
            </div>
            <div className="cb-vendas-formcontrol-container">
                <DatePicker
                    selected={new Date()}
                    onChange={(date: Date) => {}}
                    className="cb-vendas-formcontrol"
                    dateFormat="dd/MM/yyyy"
                />
            </div>
        </div>
        <div>
            <table className ="cb-sales-table">
                <thead>
                    <tr>
                        <th className="show-992">ID</th>
                        <th className="show-580">Data</th>
                        <th>Vendedor</th>
                        <th className="show-992">Visitas</th>
                        <th className="show-992">Vendas</th>                                        
                        <th>Total</th>
                        <th>Notificar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="show-992">#341</td>
                        <td className="show-580">00/00/0000</td>
                        <td>produto</td>
                        <td className="show-992">00</td>
                        <td className="show-992">00</td>
                        <td>R$ xxx,xx</td>
                        <td>
                            <NotificationButton/>
                        </td>
                    </tr>
                    <tr>
                        <td className="show-992">#341</td>
                        <td className="show-580">00/00/0000</td>
                        <td>produto</td>
                        <td className="show-992">00</td>
                        <td className="show-992">00</td>
                        <td>R$ xxx,xx</td>
                        <td>
                            <NotificationButton/>                                  
                        </td>
                     </tr>
                    <tr>
                        <td className="show-992">#341</td>
                        <td className="show-580">00/00/0000</td>
                        <td>produto</td>
                        <td className="show-992">00</td>
                        <td className="show-992">00</td>
                        <td>R$ xxx,xx</td>
                         <td>
                            <NotificationButton/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    )

}

export default SalesCard;