import Header from '../Header';

export default function HeaderExample() {
  return (
    <div className="bg-background min-h-32">
      <Header onMenuClick={() => console.log('Menu clicked')} />
    </div>
  );
}