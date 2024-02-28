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

    const handleInputChange = (e) => {

    }
    return (
        <div className="product-table row m-0 p-0 w-100">
            <div className="row justify-content-end ">
                <button className='add-product btn bg-transparent  border border-2 rounded-2 w-auto p-3 pt-0 pb-0 btn-lg' data-bs-toggle="modal" data-bs-target="#staticBackdrop" type='button'><p className='p-0 m-0 fs-6'>+ Add</p></button>
            </div>
            {/* <!-- Modal --> */}
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog  modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Add Product</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form action="">
                                <div className="mb-3">
                                    <label htmlFor="product-name" className="form-label">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="product-name"
                                        name="productName"
                                        value={''}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="row m-0 p-0">
                                    <div className="mb-3 col-6 ps-0">
                                        <label htmlFor="price" className="form-label">
                                            Price
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="price"
                                            name="price"
                                            value={''}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3 col-6 pe-0">
                                        <label htmlFor="stock" className="form-label">
                                            stock
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="stock"
                                            name="stock"
                                            value={''}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 ps-0">
                                    <label htmlFor="category" className="form-label">
                                        Category
                                    </label>
                                    <select class="form-select form-select-md" aria-label="Large select example" id="category">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="mb-3 ps-0">
                                    <label htmlFor="description" className="form-label">
                                        Description
                                    </label>
                                    <textarea class="form-control" placeholder="Leave a comment here" id="description"></textarea>
                                </div>
                                <div class="mb-3">
                                    <label for="formFileMultiple" class="form-label">Multiple files input example</label>
                                    <input class="form-control" type="file" id="formFileMultiple" multiple />
                                </div>

                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Save</button>

                        </div>
                    </div>
                </div>
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
                        <th>Stock Count</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="pt-3 pb-3">
                        <td>Bamboo Watch</td>
                        <td><img src={itemImg1} alt="item" style={{ width: '140px', height: '70px' }} className='rounded-3' /></td>
                        <td>Rs 3999</td>
                        <td>Strap</td>
                        <td>
                            4 star
                        </td>
                        <td>Invella 22mm Jubilee Style Curved Bracelet Watch Strap</td>
                        <td>4</td>
                        <td><span className='badge bg-success'>Instock</span></td>
                    </tr>
                    <tr className="pt-3 pb-3">
                        <td>Bamboo Watch</td>
                        <td><img src={itemImg1} alt="item" style={{ width: '140px', height: '70px' }} className='rounded-3' /></td>
                        <td>Rs 3999</td>
                        <td>Strap</td>
                        <td>
                            4 star
                        </td>
                        <td>Invella 22mm Jubilee Style Curved Bracelet Watch Strap</td>
                        <td>4</td>

                        <td><span className='badge bg-success'>Instock</span></td>
                    </tr>
                    <tr className="pt-3 pb-3">
                        <td>Bamboo Watch</td>
                        <td><img src={itemImg1} alt="item" style={{ width: '140px', height: '70px' }} className='rounded-3' /></td>
                        <td>Rs 3999</td>
                        <td>Strap</td>
                        <td>
                            4 star
                        </td>
                        <td>Invella 22mm Jubilee Style Curved Bracelet Watch Strap</td>
                        <td>4</td>

                        <td><span className='badge bg-success'>Instock</span></td>
                    </tr>
                    <tr className="pt-3 pb-3">
                        <td>Bamboo Watch</td>
                        <td><img src={itemImg1} alt="item" style={{ width: '140px', height: '70px' }} className='rounded-3' /></td>
                        <td>Rs 3999</td>
                        <td>Strap</td>
                        <td>
                            4 star
                        </td>
                        <td>Invella 22mm Jubilee Style Curved Bracelet Watch Strap</td>
                        <td>4</td>

                        <td><span className='badge bg-success'>Instock</span></td>
                    </tr>
                    <tr className="pt-3 pb-3">
                        <td>Bamboo Watch</td>
                        <td><img src={itemImg1} alt="item" style={{ width: '140px', height: '70px' }} className='rounded-3' /></td>
                        <td>Rs 3999</td>
                        <td>Strap</td>
                        <td>
                            4 star
                        </td>
                        <td>Invella 22mm Jubilee Style Curved Bracelet Watch Strap</td>
                        <td>4</td>

                        <td><span className='badge bg-success'>Instock</span></td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
    );
};

export default Product;
