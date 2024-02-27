import React, { useEffect, useRef } from 'react';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'datatables.net-responsive-dt/css/responsive.dataTables.css';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-responsive';
import itemImg1 from '../../assets/images/item-image-1.webp';

const Product = () => {
    const tableRef = useRef(null);

    useEffect(() => {
        $(tableRef.current).DataTable({
            responsive: true
        });
    }, []);

    return (
        <div className="product-table row m-0 p-0 w-100">
            <div className="row justify-content-end ">
                <button  className='btn btn-transparent bg-transparent  border border-2 rounded-2 w-auto p-3 pt-0 pb-0 btn-lg'><p className='p-0 m-0 fs-6'>+ Add</p></button>
            </div>
            <table ref={tableRef} className="display w-100" style={{ width: '100%' }} >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Reviews</th>
                        <th>Description</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="pt-3 pb-3">
                        <td>Bamboo Watch</td>
                        <td><img src={itemImg1} alt="item" style={{ width: '140px' ,height:'70px'}} className='rounded-3' /></td>
                        <td>Rs 3999</td>
                        <td>Strap</td>
                        <td>
                            4 star
                        </td>
                        <td>Invella 22mm Jubilee Style Curved Bracelet Watch Strap</td>
                        <td><span className='badge bg-success'>Instock</span></td>
                    </tr>
                    <tr className="pt-3 pb-3">
                        <td>Bamboo Watch</td>
                        <td><img src={itemImg1} alt="item" style={{ width: '140px' ,height:'70px'}} className='rounded-3' /></td>
                        <td>Rs 3999</td>
                        <td>Strap</td>
                        <td>
                            4 star
                        </td>
                        <td>Invella 22mm Jubilee Style Curved Bracelet Watch Strap</td>
                        <td><span className='badge bg-success'>Instock</span></td>
                    </tr>
                    <tr className="pt-3 pb-3">
                        <td>Bamboo Watch</td>
                        <td><img src={itemImg1} alt="item" style={{ width: '140px' ,height:'70px'}} className='rounded-3' /></td>
                        <td>Rs 3999</td>
                        <td>Strap</td>
                        <td>
                            4 star
                        </td>
                        <td>Invella 22mm Jubilee Style Curved Bracelet Watch Strap</td>
                        <td><span className='badge bg-success'>Instock</span></td>
                    </tr>
                    <tr className="pt-3 pb-3">
                        <td>Bamboo Watch</td>
                        <td><img src={itemImg1} alt="item" style={{ width: '140px' ,height:'70px'}} className='rounded-3' /></td>
                        <td>Rs 3999</td>
                        <td>Strap</td>
                        <td>
                            4 star
                        </td>
                        <td>Invella 22mm Jubilee Style Curved Bracelet Watch Strap</td>
                        <td><span className='badge bg-success'>Instock</span></td>
                    </tr>
                    <tr className="pt-3 pb-3">
                        <td>Bamboo Watch</td>
                        <td><img src={itemImg1} alt="item" style={{ width: '140px' ,height:'70px'}} className='rounded-3' /></td>
                        <td>Rs 3999</td>
                        <td>Strap</td>
                        <td>
                            4 star
                        </td>
                        <td>Invella 22mm Jubilee Style Curved Bracelet Watch Strap</td>
                        <td><span className='badge bg-success'>Instock</span></td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
    );
};

export default Product;
