import AllProducts from '../components/AllProducts';
import ProductManager from '../components/ProductManager';


const Main = (props) => {
    //const [productFormSubmitted, setProductFormSubmitted] = useState(false);
    const { deleteProduct, productFormSubmitted, setProductFormSubmitted  } = props;

    return (
        <div>
            <ProductManager 
               productFormSubmitted={productFormSubmitted} 
               setProductFormSubmitted={setProductFormSubmitted}                           
            />
            <AllProducts 
                productFormSubmitted={productFormSubmitted}                 
                deleteProduct={deleteProduct}      
            />  
        </div>
    )
}

export default Main;