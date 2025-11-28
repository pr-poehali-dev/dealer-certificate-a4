import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [dealerName, setDealerName] = useState('ООО "ТД "АСС" (ИНН 5245029239)');
  const [isEditing, setIsEditing] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between print:hidden">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Сертификат дилера</h1>
            <p className="text-slate-600 mt-1">Официальный документ партнера</p>
          </div>
          <Button onClick={handlePrint} size="lg" className="gap-2">
            <Icon name="Printer" size={20} />
            Печать
          </Button>
        </div>

        <Card className="p-8 print:shadow-none print:border-0">
          <div className="aspect-[210/297] bg-white border-8 border-double border-slate-800 p-12 relative">
            <div className="absolute top-8 left-8 right-8 bottom-8 border-2 border-amber-500"></div>
            
            <div className="absolute top-12 left-12 z-20">
              <img 
                src="https://cdn.poehali.dev/files/e61a23f8-29d3-401a-b404-2c1f712b7fd9.png" 
                alt="Логотип Кузембетьевский РМЗ"
                className="w-32 h-auto"
              />
            </div>

            <div className="relative z-10 h-full flex flex-col">
              <div className="text-center mb-8">
                <div className="space-y-2 mt-8">
                  <div className="text-sm font-medium text-slate-600 tracking-widest uppercase">
                    Официальный документ
                  </div>
                  <h2 className="text-5xl font-bold text-slate-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    СЕРТИФИКАТ
                  </h2>
                  <div className="text-xl text-amber-600 font-semibold tracking-wide">
                    ДИЛЕРА
                  </div>
                </div>
                <div className="mt-6 flex justify-center gap-4 items-center">
                  <img 
                    src="https://cdn.poehali.dev/files/5f9e0328-146e-4dac-8123-8b58e4e4007f.jpg" 
                    alt="Оборудование МЗК-7СТ"
                    className="w-72 h-auto"
                    style={{ 
                      mixBlendMode: 'multiply',
                      filter: 'contrast(1.1) brightness(1.05)'
                    }}
                  />
                  <img 
                    src="https://cdn.poehali.dev/files/a392ae9d-c3ba-48ba-b673-2fea08f79853.jpg" 
                    alt="Оборудование ЗМ-100 АМГ"
                    className="w-72 h-auto"
                    style={{ 
                      mixBlendMode: 'multiply',
                      filter: 'contrast(1.1) brightness(1.05)'
                    }}
                  />
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-center space-y-8">
                <div className="text-center space-y-4">
                  <p className="text-lg text-slate-700">
                    Настоящим подтверждается, что
                  </p>
                  
                  {isEditing ? (
                    <div className="flex items-center justify-center gap-2 print:hidden">
                      <Input
                        value={dealerName}
                        onChange={(e) => setDealerName(e.target.value)}
                        className="max-w-md text-center text-2xl font-bold border-2 border-amber-500"
                      />
                      <Button onClick={() => setIsEditing(false)} variant="ghost" size="icon">
                        <Icon name="Check" size={20} />
                      </Button>
                    </div>
                  ) : (
                    <div 
                      className="group cursor-pointer print:cursor-default"
                      onClick={() => setIsEditing(true)}
                    >
                      <h3 className="text-3xl font-bold text-slate-800 border-b-2 border-amber-500 inline-block px-8 py-2 group-hover:bg-amber-50 transition-colors print:hover:bg-transparent">
                        {dealerName}
                      </h3>
                      <Icon name="Edit2" size={16} className="inline-block ml-2 text-slate-400 group-hover:text-amber-600 print:hidden" />
                    </div>
                  )}

                  <p className="text-lg text-slate-700 mt-8">
                    является официальным дилером<br />
                    <span className="font-semibold">АО "Кузембетьевский РМЗ" (ИНН 1628000773)</span><br />
                    и уполномочен осуществлять продажу продукции<br />
                    на территории Нижегородской, Владимирской и Ивановской областях
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-12 mt-16">
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="h-24 border-b-2 border-slate-300 mb-2 flex items-end justify-center pb-2">
                        <div className="w-32 h-16 rounded-full border-2 border-dashed border-slate-400 flex items-center justify-center">
                          <Icon name="FileSignature" size={32} className="text-slate-400" />
                        </div>
                      </div>
                      <div className="text-xs text-slate-500 space-y-1">
                        <p className="font-medium">Генеральный директор</p>
                        <p className="font-medium">АО "Кузембетьевский РМЗ"</p>
                        <p className="font-semibold text-slate-700">Ханафи Хамитович Каримов</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="h-24 border-b-2 border-slate-300 mb-2 flex items-end justify-center pb-2">
                        <div className="w-20 h-20 rounded-full border-2 border-dashed border-slate-400 flex items-center justify-center">
                          <span className="text-xs text-slate-400 font-medium">М.П.</span>
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 font-medium">
                        Печать организации
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-8 pt-8 border-t border-slate-200">
                  <p className="text-sm text-slate-500">
                    Дата выдачи: 24.11.2025 г.
                  </p>
                  <p className="text-xs text-slate-400 mt-2">
                    Сертификат действителен на территории РФ
                  </p>
                </div>
              </div>

              <div className="absolute top-4 right-4 flex gap-1">
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-300"></div>
              </div>

              <div className="absolute bottom-4 left-4 flex gap-1">
                <div className="w-3 h-3 rounded-full bg-amber-300"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              </div>
            </div>
          </div>
        </Card>

        <div className="text-center text-sm text-slate-600 print:hidden">
          <p>💡 Нажмите на название организации для редактирования</p>
        </div>
      </div>

      <style>{`
        @media print {
          body {
            margin: 0;
            padding: 0;
          }
          @page {
            size: A4;
            margin: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Index;