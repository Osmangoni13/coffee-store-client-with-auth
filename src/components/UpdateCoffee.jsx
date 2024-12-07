import React from 'react';
import { useActionData, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, teste, category, details, url } = coffee;
    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const teste = form.teste.value;
        const category = form.category.value;
        const details = form.details.value;
        const url = form.url.value;
        // const submit = form.submit.value;

        const updatedCoffee = { name, quantity, supplier, teste, category, details, url }
        console.log(updatedCoffee);
        // form.reset();

        //send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Succeess!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }
    return (
        <div>
            <div className="bg-[#F4F3F0] container max-w-4xl mx-auto p-8">
                <div className="bg-[#F4F3F0]  rounded-lg p-10">
                    <h1 className="text-3xl font-bold text-center mb-6">Update Coffee: {name}</h1>

                    <form onSubmit={handleUpdateCoffee}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" name='name' defaultValue={name} placeholder="Enter coffee name" className="input input-bordered w-full" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Quantity</label>
                                <input type="text" name='quantity' defaultValue={quantity} placeholder="Quantity" className="input input-bordered w-full" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Supplier Name</label>
                                <input type="text" name='supplier' defaultValue={supplier} placeholder="Enter coffee supplier" className="input input-bordered w-full" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Taste</label>
                                <input type="text" name='teste' defaultValue={teste} placeholder="Enter coffee taste" className="input input-bordered w-full" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Category</label>
                                <input type="text" name='category' defaultValue={category} placeholder="Enter coffee category" className="input input-bordered w-full" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Details</label>
                                <input type="text" name='details' defaultValue={details} placeholder="Enter coffee details" className="input input-bordered w-full" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700">Photo</label>
                                <input type="url" name='url' defaultValue={url} placeholder="Enter photo URL" className="input input-bordered w-full" />
                            </div>
                        </div>

                        <div className="mt-8">
                            <button type="submit" name='submit' className="btn  w-full bg-[#D2B48C] text-black hover:bg-brown-600">Update Coffee</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;