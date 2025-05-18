import Link from 'next/link';
import { navOptions } from '@/data/navOptions';

export default function Menu() {
  return (
    <nav>
      <ul>
        {navOptions.map((option) => (
          <li key={option.path}>
            <Link key={option.path} href={option.path}>
              {option.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
