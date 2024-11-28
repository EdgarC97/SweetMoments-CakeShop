import React from 'react';
import { useForm, Head } from '@inertiajs/react';
import Layout from '@/Layouts/DashboardLayout';
import { Product } from '@/types';

interface Props {
    product?: Product;
}

export default function Form({ product }: Props) {
    const { data, setData, errors, post, put, processing } = useForm<Product>({
        id: product?.id ?? 0,  // Asignar un valor por defecto (0) si no se encuentra el id
        name: product?.name || '',
        description: product?.description || '',
        price: product?.price || 0,
        size: product?.size || '',
        ingredients: product?.ingredients || '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (product) {
            put(route('products.update', product.id));
        } else {
            post(route('products.store'));
        }
    };

    return (
        <Layout>
            <Head title={product ? 'Edit Product' : 'Create Product'} />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <h1 className="text-2xl font-semibold text-gray-900 mb-6">
                                {product ? 'Edit Product' : 'Create Product'}
                            </h1>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={data.name}
                                        onChange={e => setData('name', e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                    {errors.name && <div className="text-red-500 text-xs italic">{errors.name}</div>}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                                    <textarea
                                        id="description"
                                        value={data.description}
                                        onChange={e => setData('description', e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                    {errors.description && <div className="text-red-500 text-xs italic">{errors.description}</div>}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">Price</label>
                                    <input
                                        type="number"
                                        id="price"
                                        value={data.price}
                                        onChange={e => setData('price', parseFloat(e.target.value))}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                    {errors.price && <div className="text-red-500 text-xs italic">{errors.price}</div>}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="size" className="block text-gray-700 text-sm font-bold mb-2">Size</label>
                                    <input
                                        type="text"
                                        id="size"
                                        value={data.size}
                                        onChange={e => setData('size', e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                    {errors.size && <div className="text-red-500 text-xs italic">{errors.size}</div>}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="ingredients" className="block text-gray-700 text-sm font-bold mb-2">Ingredients</label>
                                    <textarea
                                        id="ingredients"
                                        value={data.ingredients}
                                        onChange={e => setData('ingredients', e.target.value)}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                    {errors.ingredients && <div className="text-red-500 text-xs italic">{errors.ingredients}</div>}
                                </div>
                                <div className="flex items-center justify-between">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    >
                                        {product ? 'Update' : 'Create'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

