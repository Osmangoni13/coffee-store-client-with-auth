import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, supplier, teste, category, details, url } = coffee;
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                "Deleted!",
                                "Your file has been deleted.",
                                "success"
                            )
                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining);
                        }
                    })
                    .catch(error => {
                        console.error("Error deleting coffee:", error);
                    });

            }
        });
    }
    return (
        <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-lg overflow-hidden">
            <figure className="md:w-1/3">
                <img
                    src={url}
                    alt={name}
                    className="w-full h-full object-cover p-4"
                />
            </figure>
            <div className="flex flex-col md:flex-row justify-between w-full p-4">
                <div className="flex flex-col space-y-2">
                    <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
                    <p className="text-gray-600">Quantity: {quantity}</p>
                    <p className="text-gray-600">Supplier: {supplier}</p>
                    <p className="text-gray-600">Taste: {teste}</p>
                </div>
                <div className="flex items-center justify-center md:justify-end mt-4 md:mt-0">
                    <div className="flex flex-col space-y-2">
                        <button className="btn btn-accent join-item">View Details</button>
                        <Link to={`updateCoffee/${_id}`}>
                            <button className="btn btn-primary join-item">Edit</button>
                        </Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn btn-secondary join-item">Delete</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CoffeeCard;