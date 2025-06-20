import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { customerInfoSchema, CustomerInfoFormData } from "../lib/validations";
import { ARIA_LABELS, announceToScreenReader } from "../lib/accessibility";
import { CustomerInfoProps } from '../types';

const CustomerInfo: React.FC<CustomerInfoProps> = ({ onChange }) => {
    const form = useForm<CustomerInfoFormData>({
        resolver: zodResolver(customerInfoSchema),
        defaultValues: {
            firstName: "",
            stock: "",
            salesperson: "",
            address1: "",
            city: "",
            state: "",
            zipcode: "",
            number: "",
            email: "",
        },
    });

    // Watch form values and update parent state
    const watchedValues = form.watch();

    useEffect(() => {
        if (onChange) {
            onChange((previousState) => ({
                ...previousState,
                customerInfo: watchedValues,
            }));
        }
    }, [watchedValues, onChange]);

    return (
        <div className="po-book-form">
            <Form {...form}>
                <form
                    className="space-y-6"
                    aria-label={ARIA_LABELS.customerInfoForm}
                    role="form"
                >
                    <div className="sr-only" aria-live="polite" id="customer-form-status">
                        Customer information form. Fill out all required fields.
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white">{ARIA_LABELS.customerName.label}</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Customer Name"
                                            className="bg-black text-white border-corvette-gray focus:border-blue-500 focus-visible"
                                            aria-describedby="firstName-description"
                                            {...field}
                                        />
                                    </FormControl>
                                    <div id="firstName-description" className="sr-only">
                                        {ARIA_LABELS.customerName.description}
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="stock"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white">{ARIA_LABELS.stock.label}</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Stock"
                                            className="bg-black text-white border-corvette-gray focus:border-blue-500 focus-visible"
                                            aria-describedby="stock-description"
                                            {...field}
                                        />
                                    </FormControl>
                                    <div id="stock-description" className="sr-only">
                                        {ARIA_LABELS.stock.description}
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="salesperson"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white">{ARIA_LABELS.salesperson.label}</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Salesperson"
                                            className="bg-black text-white border-corvette-gray focus:border-blue-500 focus-visible"
                                            aria-describedby="salesperson-description"
                                            {...field}
                                        />
                                    </FormControl>
                                    <div id="salesperson-description" className="sr-only">
                                        {ARIA_LABELS.salesperson.description}
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <FormField
                            control={form.control}
                            name="address1"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white">{ARIA_LABELS.address.label}</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="1234 Main St"
                                            className="bg-black text-white border-corvette-gray focus:border-blue-500 focus-visible"
                                            aria-describedby="address1-description"
                                            {...field}
                                        />
                                    </FormControl>
                                    <div id="address1-description" className="sr-only">
                                        {ARIA_LABELS.address.description}
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white">{ARIA_LABELS.city.label}</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="City"
                                            className="bg-black text-white border-corvette-gray focus:border-blue-500 focus-visible"
                                            aria-describedby="city-description"
                                            {...field}
                                        />
                                    </FormControl>
                                    <div id="city-description" className="sr-only">
                                        {ARIA_LABELS.city.description}
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="state"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white">{ARIA_LABELS.state.label}</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="State"
                                            className="bg-black text-white border-corvette-gray focus:border-blue-500 focus-visible"
                                            aria-describedby="state-description"
                                            {...field}
                                        />
                                    </FormControl>
                                    <div id="state-description" className="sr-only">
                                        {ARIA_LABELS.state.description}
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="zipcode"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white">{ARIA_LABELS.zipcode.label}</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Zip code"
                                            className="bg-black text-white border-corvette-gray focus:border-blue-500 focus-visible"
                                            aria-describedby="zipcode-description"
                                            {...field}
                                        />
                                    </FormControl>
                                    <div id="zipcode-description" className="sr-only">
                                        {ARIA_LABELS.zipcode.description}
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="number"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white">{ARIA_LABELS.phone.label}</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="tel"
                                            placeholder="Mobile Phone"
                                            className="bg-black text-white border-corvette-gray focus:border-blue-500 focus-visible"
                                            aria-describedby="number-description"
                                            {...field}
                                        />
                                    </FormControl>
                                    <div id="number-description" className="sr-only">
                                        {ARIA_LABELS.phone.description}
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white">{ARIA_LABELS.email.label}</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="email"
                                            placeholder="Enter email"
                                            className="bg-black text-white border-corvette-gray focus:border-blue-500 focus-visible"
                                            aria-describedby="email-description"
                                            {...field}
                                        />
                                    </FormControl>
                                    <div id="email-description" className="sr-only">
                                        {ARIA_LABELS.email.description}
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                </form>
            </Form>
        </div>
    );
};

export default CustomerInfo;