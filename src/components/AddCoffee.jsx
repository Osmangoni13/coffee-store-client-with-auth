import React from 'react';
import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = event => {
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

        const newCoffee = { name, quantity, supplier, teste, category, details, url }
        console.log(newCoffee);
        // form.reset();

        //send data to the server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Succeess!',
                        text: 'Coffee Added Successfully',
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
                    <h1 className="text-3xl font-bold text-center mb-6">Add New Coffee</h1>
                    <p className="text-center text-gray-500 mb-8">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at
                        its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
                        to using Content here.
                    </p>

                    <form onSubmit={handleAddCoffee}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" name='name' placeholder="Enter coffee name" className="input input-bordered w-full" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Quantity</label>
                                <input type="text" name='quantity' placeholder="Quantity" className="input input-bordered w-full" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Supplier Name</label>
                                <input type="text" name='supplier' placeholder="Enter coffee supplier" className="input input-bordered w-full" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Taste</label>
                                <input type="text" name='teste' placeholder="Enter coffee taste" className="input input-bordered w-full" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Category</label>
                                <input type="text" name='category' placeholder="Enter coffee category" className="input input-bordered w-full" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Details</label>
                                <input type="text" name='details' placeholder="Enter coffee details" className="input input-bordered w-full" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700">Photo</label>
                                <input type="url" name='url' placeholder="Enter photo URL" className="input input-bordered w-full" />
                            </div>
                        </div>

                        <div className="mt-8">
                            <button type="submit" name='submit' className="btn  w-full bg-[#D2B48C] text-black hover:bg-brown-600">Add Coffee</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCoffee;