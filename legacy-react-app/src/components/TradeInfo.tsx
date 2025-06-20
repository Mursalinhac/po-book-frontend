import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { tradeInfoSchema, TradeInfoFormData } from "../lib/validations";
import { ARIA_LABELS } from "../lib/accessibility";
import { TradeInfoProps } from '../types';

const TradeInfo: React.FC<TradeInfoProps> = ({ onChange }) => {
    const form = useForm<TradeInfoFormData>({
        resolver: zodResolver(tradeInfoSchema),
        defaultValues: {
            year: "",
            make: "",
            model: "",
            color: "",
            vin: "",
            miles: "",
            tradeValue: "",
            balanceOwed: "",
            netTrade: "",
            balanceOwedTo: "",
            accountNumber: "",
            infoFrom: "",
            goodWill: "",
        },
    });

    // Watch form values and update parent state
    const watchedValues = form.watch();

    useEffect(() => {
        if (onChange) {
            onChange((previousState) => ({
                ...previousState,
                tradeInfo: watchedValues,
            }));
        }
    }, [watchedValues, onChange]);
    return (
        <div className="po-book-form">
            <Form {...form}>
                <form
                    className="space-y-6"
                    aria-label={ARIA_LABELS.tradeInfoForm}
                    role="form"
                >
                    <div className="sr-only" aria-live="polite" id="trade-form-status">
                        Trade-in vehicle information form. Fill out all required fields.
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <FormField
                            control={form.control}
                            name="year"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white">{ARIA_LABELS.tradeYear.label}</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="Year"
                                            className="bg-black text-white border-corvette-gray focus:border-blue-500 focus-visible"
                                            aria-describedby="year-description"
                                            {...field}
                                        />
                                    </FormControl>
                                    <div id="year-description" className="sr-only">
                                        {ARIA_LABELS.tradeYear.description}
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="make"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white">{ARIA_LABELS.tradeMake.label}</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Make"
                                            className="bg-black text-white border-corvette-gray focus:border-blue-500 focus-visible"
                                            aria-describedby="make-description"
                                            {...field}
                                        />
                                    </FormControl>
                                    <div id="make-description" className="sr-only">
                                        {ARIA_LABELS.tradeMake.description}
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="model"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white">{ARIA_LABELS.tradeModel.label}</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Model"
                                            className="bg-black text-white border-corvette-gray focus:border-blue-500 focus-visible"
                                            aria-describedby="model-description"
                                            {...field}
                                        />
                                    </FormControl>
                                    <div id="model-description" className="sr-only">
                                        {ARIA_LABELS.tradeModel.description}
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="color"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white">{ARIA_LABELS.tradeColor.label}</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Color"
                                            className="bg-black text-white border-corvette-gray focus:border-blue-500 focus-visible"
                                            aria-describedby="color-description"
                                            {...field}
                                        />
                                    </FormControl>
                                    <div id="color-description" className="sr-only">
                                        {ARIA_LABELS.tradeColor.description}
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="vin"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white">{ARIA_LABELS.tradeVin.label}</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="VIN"
                                            className="bg-black text-white border-corvette-gray focus:border-blue-500 focus-visible"
                                            aria-describedby="vin-description"
                                            maxLength={17}
                                            {...field}
                                        />
                                    </FormControl>
                                    <div id="vin-description" className="sr-only">
                                        {ARIA_LABELS.tradeVin.description}
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="miles"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white">{ARIA_LABELS.tradeMiles.label}</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="Miles"
                                            className="bg-black text-white border-corvette-gray focus:border-blue-500 focus-visible"
                                            aria-describedby="miles-description"
                                            {...field}
                                        />
                                    </FormControl>
                                    <div id="miles-description" className="sr-only">
                                        {ARIA_LABELS.tradeMiles.description}
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <FormField
                            control={form.control}
                            name="tradeValue"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white">Trade Value</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="Trade Value"
                                            className="bg-black text-white border-corvette-gray focus:border-blue-500"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="balanceOwed"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white">Balance Owed</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="Balance Owed"
                                            className="bg-black text-white border-corvette-gray focus:border-blue-500"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="netTrade"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white">Net Trade</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="Net Trade"
                                            className="bg-black text-white border-corvette-gray focus:border-blue-500"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        <FormField
                            control={form.control}
                            name="balanceOwedTo"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white">Balance Owed to</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Balance Owed to"
                                            className="bg-black text-white border-corvette-gray focus:border-blue-500"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="accountNumber"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white">Account Number</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="Account Number"
                                            className="bg-black text-white border-corvette-gray focus:border-blue-500"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="infoFrom"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white">Info From</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Info From"
                                            className="bg-black text-white border-corvette-gray focus:border-blue-500"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        <FormField
                            control={form.control}
                            name="goodWill"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white">Good Will</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="Good Will"
                                            className="bg-black text-white border-corvette-gray focus:border-blue-500"
                                            {...field}
                                        />
                                    </FormControl>
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

export default TradeInfo;