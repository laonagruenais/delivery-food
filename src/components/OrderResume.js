function OrderResume ({ cart, total }) {
  return (
    <div>
      <h1>Votre commande</h1>
      <table>
        <thead>
          <th>Plat</th>
          <th>Quantité</th>
          <th>Prix</th>
        </thead>
        <tbody>
          {
                cart.map(item => {
                  return (
                    <tr key={item.dish._id}>
                      <td>{item.dish.title}</td>
                      <td>{item.quantity}</td>
                      <td>{item.dish.price.toFixed(2)}€</td>
                    </tr>
                  )
                })
            }
        </tbody>
        <tfoot>
          <tr>
            <td>Totale :</td>
            <td>{total.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default OrderResume
