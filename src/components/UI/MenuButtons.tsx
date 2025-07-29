import {useTranslations} from 'next-intl';

function MenuButtons(lang: string) {
  const t = useTranslations('Index');

  return {
    label1: t('menu.label1'),
    label2: t('menu.label2'),
    label3: t('menu.label3'),
    label4: t('menu.label4'),
    label5: t('menu.label5'),
  };
}

export default MenuButtons  

//interface MenuButtonsProps {
//  children: ReactNode;
//  t: (key: string) => string;
//}

//const MenuButtons: React.FC<MenuButtonsProps> = ({ children, t }) => {
/*
function MenuButtons({children}: { children: React.ReactNode }) {
  
  const t = useTranslations('Index');
  return (
    <>
      <div style={{display: "flex"}}>
        {React.Children.map(children, (child, index) => (
          <div key={index}>{t(`menu.${index}.title`)}</div> 
        ))}
      </div>
    </>
  )
}

export default MenuButtons    
*/
/*
{React.Children.map(children, (child, index) => {
            // Проверяем, является ли текущий дочерний элемент Link
              if (React.isValidElement(child) && child.type === 'Link') {
                return (
                  <div key={index}>
                    {child}
                  </div>
                );
              }
              return null; // Пропускаем элементы, которые не являются Link
            })}
*/