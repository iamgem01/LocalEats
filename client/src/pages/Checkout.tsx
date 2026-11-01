import React, { useState } from "react";
import {
    ArrowLeft,
    CheckCircle,
    CreditCard,
    Truck,
    Wallet,
    Smartphone,
    ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";

export default function Checkout() {
    const [, setLocation] = useLocation();
    const [step, setStep] = useState(1); // 1: Info, 2: Payment, 3: Success
    const [paymentMethod, setPaymentMethod] = useState<string>("momo");

    // Mock data đơn hàng
    const orderTotal = 325000;
    const shippingFee = 25000;

    const handlePayment = () => {
        // Giả lập xử lý thanh toán (API Call)
        setTimeout(() => {
            setStep(3);
        }, 1500);
    };

    if (step === 3) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
                <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center animate-in zoom-in duration-300">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Thanh toán thành công!</h2>
                    <p className="text-muted-foreground mb-6">
                        Đơn hàng #LE8829 đã được thanh toán qua {paymentMethod === 'card' ? 'Thẻ tín dụng' : paymentMethod === 'momo' ? 'Ví MoMo' : 'ZaloPay'}.
                    </p>
                    <div className="space-y-3">
                        <Button className="w-full" onClick={() => setLocation("/home")}>
                            Về trang chủ
                        </Button>
                        <Button variant="outline" className="w-full">
                            Theo dõi đơn hàng
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <header className="bg-white border-b sticky top-0 z-10">
                <div className="container mx-auto px-4 h-16 flex items-center gap-4">
                    <Link href="/home">
                        <a className="p-2 hover:bg-gray-100 rounded-full">
                            <ArrowLeft className="h-5 w-5" />
                        </a>
                    </Link>
                    <h1 className="text-lg font-bold">Thanh toán & Vận chuyển</h1>
                </div>
            </header>

            <div className="container mx-auto px-4 py-6 max-w-4xl">
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Cột trái: Thông tin & Hình thức */}
                    <div className="md:col-span-2 space-y-6">

                        {/* 1. Thông tin giao hàng */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="font-semibold flex items-center gap-2 mb-4 text-lg">
                                <Truck className="h-5 w-5 text-primary" /> Địa chỉ nhận hàng
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-medium text-muted-foreground">Họ tên</label>
                                    <input className="p-2.5 border rounded-lg w-full bg-gray-50" defaultValue="Nguyễn Văn A" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-medium text-muted-foreground">Số điện thoại</label>
                                    <input className="p-2.5 border rounded-lg w-full bg-gray-50" defaultValue="0987654321" />
                                </div>
                                <div className="space-y-1 md:col-span-2">
                                    <label className="text-xs font-medium text-muted-foreground">Địa chỉ</label>
                                    <input className="p-2.5 border rounded-lg w-full bg-gray-50" defaultValue="123 Đường Láng, Đống Đa, Hà Nội" />
                                </div>
                            </div>
                        </div>

                        {/* 2. Phương thức thanh toán */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="font-semibold flex items-center gap-2 mb-4 text-lg">
                                <Wallet className="h-5 w-5 text-primary" /> Phương thức thanh toán
                            </h3>

                            <div className="space-y-3">

                                {/* OPTION 1: MoMo Wallet */}
                                <label
                                    className={`flex items-center gap-4 p-4 border rounded-xl cursor-pointer transition-all ${paymentMethod === 'momo' ? 'bg-[#A50064]/5 border-[#A50064] ring-1 ring-[#A50064]' : 'hover:bg-gray-50 border-gray-200'}`}
                                    onClick={() => setPaymentMethod('momo')}
                                >
                                    <div className="h-5 w-5 rounded-full border border-gray-300 flex items-center justify-center shrink-0">
                                        {paymentMethod === 'momo' && <div className="h-2.5 w-2.5 bg-[#A50064] rounded-full" />}
                                    </div>
                                    {/* MoMo Icon Placeholder */}
                                    <div className="h-10 w-10 bg-[#A50064] rounded-lg flex items-center justify-center text-white font-bold text-xs shrink-0">
                                        MoMo
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-semibold text-gray-900">Ví MoMo</div>
                                        <div className="text-sm text-muted-foreground">Nhập mã ưu đãi trong ứng dụng</div>
                                    </div>
                                </label>

                                {/* Details view for MoMo */}
                                {paymentMethod === 'momo' && (
                                    <div className="ml-0 md:ml-9 p-4 bg-gray-50 rounded-lg border border-dashed border-gray-300 animate-in fade-in slide-in-from-top-2">
                                        <p className="text-sm text-center mb-3">Quét mã QR bằng ứng dụng MoMo để thanh toán</p>
                                        <div className="flex justify-center">
                                            <div className="bg-white p-2 rounded shadow-sm border h-32 w-32 flex items-center justify-center text-xs text-muted-foreground">
                                                [QR MoMo Code]
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* OPTION 2: ZaloPay */}
                                <label
                                    className={`flex items-center gap-4 p-4 border rounded-xl cursor-pointer transition-all ${paymentMethod === 'zalopay' ? 'bg-[#0068FF]/5 border-[#0068FF] ring-1 ring-[#0068FF]' : 'hover:bg-gray-50 border-gray-200'}`}
                                    onClick={() => setPaymentMethod('zalopay')}
                                >
                                    <div className="h-5 w-5 rounded-full border border-gray-300 flex items-center justify-center shrink-0">
                                        {paymentMethod === 'zalopay' && <div className="h-2.5 w-2.5 bg-[#0068FF] rounded-full" />}
                                    </div>
                                    {/* ZaloPay Icon Placeholder */}
                                    <div className="h-10 w-10 bg-[#0068FF] rounded-lg flex items-center justify-center text-white font-bold text-[10px] shrink-0">
                                        ZaloPay
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-semibold text-gray-900">Ví ZaloPay</div>
                                        <div className="text-sm text-muted-foreground">Thanh toán nhanh qua Zalo chat</div>
                                    </div>
                                </label>

                                {/* Details view for ZaloPay */}
                                {paymentMethod === 'zalopay' && (
                                    <div className="ml-0 md:ml-9 p-4 bg-blue-50/50 rounded-lg border border-blue-100 flex items-center justify-center gap-3 animate-in fade-in slide-in-from-top-2">
                                        <Smartphone className="h-5 w-5 text-[#0068FF]" />
                                        <span className="text-sm font-medium text-[#0068FF]">Hệ thống sẽ chuyển hướng sang ứng dụng ZaloPay</span>
                                    </div>
                                )}

                                {/* OPTION 3: Credit/Debit Card */}
                                <label
                                    className={`flex items-center gap-4 p-4 border rounded-xl cursor-pointer transition-all ${paymentMethod === 'card' ? 'bg-gray-100 border-gray-400 ring-1 ring-gray-400' : 'hover:bg-gray-50 border-gray-200'}`}
                                    onClick={() => setPaymentMethod('card')}
                                >
                                    <div className="h-5 w-5 rounded-full border border-gray-300 flex items-center justify-center shrink-0">
                                        {paymentMethod === 'card' && <div className="h-2.5 w-2.5 bg-gray-800 rounded-full" />}
                                    </div>
                                    <div className="h-10 w-10 bg-gray-800 rounded-lg flex items-center justify-center text-white shrink-0">
                                        <CreditCard className="h-5 w-5" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-semibold text-gray-900">Thẻ Quốc tế (Credit/Debit)</div>
                                        <div className="text-sm text-muted-foreground">Visa, Mastercard, JCB, Amex</div>
                                    </div>
                                    <div className="flex gap-1">
                                        {/* Mock Card Icons */}
                                        <div className="h-6 w-8 bg-blue-600 rounded flex items-center justify-center text-[8px] text-white font-bold">VISA</div>
                                        <div className="h-6 w-8 bg-red-500 rounded flex items-center justify-center text-[8px] text-white font-bold">MC</div>
                                    </div>
                                </label>

                                {/* Form Input for Credit Card */}
                                {paymentMethod === 'card' && (
                                    <div className="ml-0 md:ml-9 p-5 bg-gray-50 rounded-lg border border-gray-200 animate-in fade-in slide-in-from-top-2">
                                        <div className="space-y-4">
                                            <div className="space-y-1">
                                                <label className="text-xs font-bold text-gray-500 uppercase">Số thẻ</label>
                                                <div className="relative">
                                                    <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                                    <input placeholder="0000 0000 0000 0000" className="pl-9 p-2.5 border rounded-md w-full text-sm font-mono" />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-1">
                                                    <label className="text-xs font-bold text-gray-500 uppercase">Hết hạn (MM/YY)</label>
                                                    <input placeholder="12/25" className="p-2.5 border rounded-md w-full text-sm font-mono" />
                                                </div>
                                                <div className="space-y-1">
                                                    <label className="text-xs font-bold text-gray-500 uppercase">CVC/CVV</label>
                                                    <input type="password" placeholder="123" maxLength={3} className="p-2.5 border rounded-md w-full text-sm font-mono" />
                                                </div>
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-xs font-bold text-gray-500 uppercase">Tên chủ thẻ</label>
                                                <input placeholder="NGUYEN VAN A" className="p-2.5 border rounded-md w-full text-sm uppercase" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Cột phải: Tổng quan đơn hàng */}
                    <div className="md:col-span-1">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-24">
                            <h3 className="font-semibold mb-4 text-lg">Đơn hàng (2 món)</h3>

                            <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                                <div className="flex gap-3 items-start">
                                    <div className="h-14 w-14 bg-gray-100 rounded-md shrink-0 border"></div>
                                    <div>
                                        <p className="text-sm font-medium line-clamp-2">Cà phê Arabica Cầu Đất Thượng Hạng</p>
                                        <p className="text-xs text-muted-foreground mt-1">x1 • 280.000đ</p>
                                    </div>
                                </div>
                                <div className="flex gap-3 items-start">
                                    <div className="h-14 w-14 bg-gray-100 rounded-md shrink-0 border"></div>
                                    <div>
                                        <p className="text-sm font-medium line-clamp-2">Rau cải hữu cơ Đà Lạt</p>
                                        <p className="text-xs text-muted-foreground mt-1">x1 • 45.000đ</p>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-dashed pt-4 space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Tạm tính</span>
                                    <span className="font-medium">{orderTotal.toLocaleString()}đ</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Phí vận chuyển</span>
                                    <span className="font-medium">{shippingFee.toLocaleString()}đ</span>
                                </div>

                                <div className="bg-yellow-50 p-2 rounded text-xs text-yellow-800 flex items-center gap-2">
                                    <div className="h-1.5 w-1.5 bg-yellow-500 rounded-full"></div>
                                    Đã áp dụng mã: FREESHIP
                                </div>

                                <div className="flex justify-between font-bold text-xl pt-4 border-t">
                                    <span>Tổng cộng</span>
                                    <span className="text-primary">{(orderTotal + shippingFee).toLocaleString()}đ</span>
                                </div>
                            </div>

                            <Button
                                className={`w-full mt-6 h-12 text-base font-semibold shadow-lg transition-all ${
                                    paymentMethod === 'momo' ? 'bg-[#A50064] hover:bg-[#8B0054] shadow-pink-200' :
                                        paymentMethod === 'zalopay' ? 'bg-[#0068FF] hover:bg-[#0054CC] shadow-blue-200' : ''
                                }`}
                                onClick={handlePayment}
                            >
                                {paymentMethod === 'card' ? `Thanh toán ${(orderTotal + shippingFee).toLocaleString()}đ` :
                                    paymentMethod === 'momo' ? 'Thanh toán bằng MoMo' : 'Thanh toán bằng ZaloPay'}
                                <ChevronRight className="ml-1 h-4 w-4" />
                            </Button>

                            <div className="mt-4 flex items-center justify-center gap-2 grayscale opacity-50">
                                <div className="h-4 w-8 bg-gray-200 rounded"></div>
                                <div className="h-4 w-8 bg-gray-200 rounded"></div>
                                <div className="h-4 w-8 bg-gray-200 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}